import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/mockProducts";

function HomePage() {
  const featuredProducts = products.slice(13, 16); // Adjust the number of products displayed here
  return (
    <div className="p-6 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white p-10 text-center rounded-lg mb-8">
        <h1 className="text-4xl font-bold">Welcome to Our eCommerce Store</h1>
        <p className="mt-4 text-white font-bold">
          Discover amazing products tailored just for you
        </p>
        <Link
          to="/products"
          className="mt-6 inline-block bg-yellow-400 text-black font-semibold py-3 px-5 rounded hover:bg-yellow-300"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="product-card"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-1">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
