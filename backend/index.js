// Backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock product data
const products = [
  { id: 1, name: "Product 1", price: 100, description: "Description of product 1" },
  { id: 2, name: "Product 2", price: 200, description: "Description of product 2" },
  // Add more products here
];

// Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  res.json(product || { message: "Product not found" });
});

app.post('/api/checkout', (req, res) => {
  const { cartItems } = req.body;
  if (cartItems && cartItems.length) {
    const paymentSuccess = Math.random() > 0.5;  // Random success/failure simulation
    res.json({ success: paymentSuccess });
  } else {
    res.status(400).json({ success: false, message: "Cart is empty" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
