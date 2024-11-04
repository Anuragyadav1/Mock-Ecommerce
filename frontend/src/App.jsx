import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
// import CheckoutPage from './pages/CheckoutPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import PaymentFailurePage from './pages/PaymentFailurePage';
import { CartProvider } from './context/CartContext';
import Navbar from './pages/Navbar';

// Replace with your own public Stripe key
// const stripePromise = loadStripe('pk_test_51OInpfSDY4zO64ajt9jx4McsTdNvhmzYSzaDwL02rAL0y0ykUkI6RHP6k1d94iS368Gs7fRTrYvs8pBIijAsAaaj00tQIV7Puw');

function App() {
    return (
        <CartProvider>
            <Router>
              <Navbar/>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<ProductListPage />} />
                        <Route path="/products/:id" element={<ProductDetailPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
                        <Route path="/payment-success" element={<PaymentSuccessPage />} />
                        <Route path="/payment-failure" element={<PaymentFailurePage />} />
                    </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;
