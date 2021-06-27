# Create simple Amazon clone

## Demo
https://user-images.githubusercontent.com/4979497/123529362-9a6e3480-d719-11eb-8bde-cc6798bc350c.mp4

## How to run 
- Open terminal and run `yarn start`
- Open another terminal in `functions` and run `npm run serve`

## Technique
- ReactJS
- React Context API
- Firebase (Auth, Firestore, Cloud Function)
- Stripe

 • Stripe on client 
 
```
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

const [{ basket, user }, dispatch] = useStateValue()
const [clientSecret, setClientSecret] = useState(true)
useEffect(() => {
    const amount = parseInt(getBasketTotal(basket) * 100)
    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            url: `/payments/create?total=${amount}`,
        })
        setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
}, [basket])

const stripe = useStripe()
const elements = useElements()

const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)

    const payload = await stripe
        .confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        })
        .then(({ paymentIntent }) => {
            console.log('paymentIntentn is >>>>>', paymentIntent)
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created,
                })

            setSucceded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET',
            })
            history.replace('/orders')
        })
}
```

• Stripe on server 

```
// prettier-ignore
const functions = require("firebase-functions")
// prettier-ignore
const express = require("express")
// prettier-ignore
const cors = require("cors")
// prettier-ignore
const stripe = require("stripe")("sk_test_gUlPGbe57OnirEOH8xb6wHiS00VjQexdTh")

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
// prettier-ignore
app.get("/", (req, res) => {
    // prettier-ignore
    res.status(200).send("Hello testing")
})

// prettier-ignore
app.post("/payments/create", (req, res) => {
    const total = req.query.total
    stripe.paymentIntents
        .create({
            amount: total,
            // prettier-ignore
            currency: "usd",
        })
        .then((paymentIntent) => {
            res.status(201).send({
                clientSecret: paymentIntent.client_secret,
            })
        })
})

// Listener
exports.api = functions.https.onRequest(app)
// API URL: http://localhost:5001/clone-7dbdc/us-central1/api
```
  Notes: `// prettier-ignore` prevents conflicts linting between local and Firebase Cloud Function.

## Deploy 
- Run `npm run build`
- run `firebase deploy`

