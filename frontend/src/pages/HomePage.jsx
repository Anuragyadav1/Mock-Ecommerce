import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="p-6 bg-gray-50">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white p-10 text-center rounded-lg mb-8">
                <h1 className="text-4xl font-bold">Welcome to Our eCommerce Store</h1>
                <p className="mt-4 text-white font-bold">Discover amazing products tailored just for you</p>
                <Link to="/products" className="mt-6 inline-block bg-yellow-400 text-black font-semibold py-3 px-5 rounded hover:bg-yellow-300">
                    Shop Now
                </Link>
            </section>
            
            {/* Featured Products */}
            <section>
                <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
                {/* This would display a few products as cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Example product cards */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Product A" className="w-full h-48 object-cover rounded mb-4" />
                        <h3 className="text-lg font-semibold">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h3>
                        <p className="text-gray-600">$109.95</p>
                    </div>
                    {/* Add more featured products similarly */}
                </div>
            </section>
        </div>
    );
}

export default HomePage;
