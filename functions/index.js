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
