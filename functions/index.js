const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_gUlPGbe57OnirEOH8xb6wHiS00VjQexdTh')

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (req, res) => {
    res.status(200).send('Hello testing')
})

app.post('/payments/create', async (req, res) => {
    const total = req.query.total
    console.log('payment request total', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listener
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-7dbdc/us-central1/api
