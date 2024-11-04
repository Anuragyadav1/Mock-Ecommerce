import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
    const { cart } = useCart();
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="bg-blue-600 p-4 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-semibold">
                    My eCommerce
                </Link>
                <div className="flex items-center space-x-6">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/products" className="hover:underline">Products</Link>
                    <Link to="/cart" className="relative hover:underline">
                        Cart
                        {cartItemCount > 0 && (
                            <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                {cartItemCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
