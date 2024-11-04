import React from 'react';
import { Link } from 'react-router-dom';

function PaymentSuccessPage() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold text-green-600 md:text-4xl">Payment Successful!</h2>
            <p className="text-gray-700 mt-4 text-lg md:text-xl">Thank you for your purchase.</p>
            <Link to="/" className="btn-primary mt-6 text-lg md:text-xl">Back to Home</Link>
        </div>
    );
}

export default PaymentSuccessPage;
