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
import Footer from './pages/Footer';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="flex flex-col min-h-screen">
                    <Navbar />

                    {/* Main content area with flex-grow to push footer to the bottom */}
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/products" element={<ProductListPage />} />
                            <Route path="/products/:id" element={<ProductDetailPage />} />
                            <Route path="/cart" element={<CartPage />} />
                            {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
                            <Route path="/payment-success" element={<PaymentSuccessPage />} />
                            <Route path="/payment-failure" element={<PaymentFailurePage />} />
                        </Routes>
                    </main>

                    <Footer />
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
