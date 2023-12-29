/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51M6FYbIDSvimkLXUBtHR03knWhnzKnxvC2e7BHUrTdSLGdbSUD6C9OjUFLvhNg8tCDHbgTbPUGoqJRd5OENr711Z00ajLDwsgn"
);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.api = onRequest((request, response) => {
//     logger.info("Hello logs!", { structuredData: true });
//     response.send("Hello from Afan!");
// });


// http://127.0.0.1:5001/clone-67528/us-central1/api




const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);