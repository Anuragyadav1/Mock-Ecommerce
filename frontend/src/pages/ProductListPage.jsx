import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/mockProducts';

function ProductListPage() {
    return (
        <div className="p-6 bg-gray-50">
            <h2 className="text-3xl font-bold mb-4">All Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id} className="product-card">
                       <img src={product.image} alt={product.title} className="w-full h-48 object-contain rounded mb-4" />
                        <h3 className="text-lg font-semibold">{product.title}</h3>
                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-500 mt-1">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductListPage;
