require("dotenv").config();

const express = require('express');
var cors = require('cors'); (process.env.STRIPE_KEY)
const stripe = require('stripe')('')

const app = express();
app.use(cors());
app.use(express.json());

app.post("/checkout", async (req, res) => {
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        })
    })

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
})


app.listen(4000, () => console.log("Listening on Port 4000"));