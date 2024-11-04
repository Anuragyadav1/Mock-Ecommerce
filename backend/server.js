require('dotenv').config()
const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_KEY); // Your test secret key
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000

app.use(cors());
app.use(express.json()); 
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";


app.post('/create-checkout-session', async (req, res) => {
    const cart = req.body; // Expecting an array of items in the cart
    // console.log(cart);

    try {
        // Map over the cart items to create line items for Stripe
        const lineItems = cart.map(item => ({
            price_data: {
                currency: 'inr', // Change to your desired currency
                product_data: {
                    name: item.title,
                    images: [item.image], // Assuming item has an image URL
                },
                unit_amount: Math.round(item.price * 100*80), // Amount in cents
            },
            quantity: item.quantity, // Quantity for each item
        }));

        // Create a checkout session with Stripe
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems, // Pass the array of line items
            mode: 'payment',
            success_url: `${frontendUrl}/payment-success`, // URL to redirect after payment
            cancel_url: `${frontendUrl}/payment-failure`,   // URL to redirect if payment fails
        });

        // Respond with the session ID
        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
