import React from 'react';
import { Link } from 'react-router-dom';

function PaymentFailurePage() {
    return (
        <div className="p-4 md:p-6 lg:p-8 mt-16 flex flex-col items-center justify-center bg-gray-50 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-600">Payment Failed</h2>
            <p className="text-gray-700 mt-4 text-sm md:text-base lg:text-lg">
                Something went wrong. Please try again.
            </p>
            <Link to="/cart" className="btn-secondary mt-10 px-6 py-2 md:px-8 md:py-3">
                Go to Cart
            </Link>
        </div>
    );
}

export default PaymentFailurePage;
