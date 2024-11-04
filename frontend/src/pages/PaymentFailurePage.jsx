import React from 'react';
import { Link } from 'react-router-dom';

function PaymentFailurePage() {
    return (
        <div className="p-6 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold text-red-600">Payment Failed</h2>
            <p className="text-gray-700 mt-4">Something went wrong. Please try again.</p>
            <Link to="/cart" className="btn-secondary mt-6"> Go to Cart</Link>
        </div>
    );
}

export default PaymentFailurePage;
