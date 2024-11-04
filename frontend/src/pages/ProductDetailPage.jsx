// src/pages/ProductDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/mockProducts';
import { useCart } from '../context/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetailPage() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find(item => item.id === parseInt(id));

    if (!product) return <p>Product not found.</p>;

    const handleAddToCart = () => {
        addToCart(product);
        toast.success(`Item added to cart!`);
    };

    return (
        <div className="p-6 bg-gray-50">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
            <img src={product.image} alt={product.title} className="w-full md:w-1/2 h-64 object-contain rounded" />
            <div className="flex-1">
                    <h2 className="text-3xl font-bold">{product.title}</h2>
                    <p className="text-gray-600 mt-4">{product.description}</p>
                    <p className="text-2xl font-semibold text-blue-600 mt-4">${product.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-500 mt-1">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                    <button
                        className="btn-primary mt-6"
                        onClick={handleAddToCart} // Add to cart with Toastify
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
           <ToastContainer />
        </div>
    );
}

export default ProductDetailPage;
