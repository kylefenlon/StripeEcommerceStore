require("dotenv").config({ path: __dirname + '/./.env' });

const express = require('express');
var cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_KEY)

const app = express();
app.use(cors());
app.use(express.json());
app.set('trust proxy', 'loopback')

app.get("/", async (req, res) => {
    return res.json({ message: "Welcome" })
})

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


app.listen(process.env.PORT, process.env.HOST, () => console.log("Listening on Port " + process.env.PORT));