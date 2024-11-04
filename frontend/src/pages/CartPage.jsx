import React from 'react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

function CartPage() {
    const { cart, removeFromCart, clearCart, addToCart, decreaseQuantity } = useCart();
    // console.log(cart)

    const URL = "http://localhost:5000"

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const makePayment = async () => {
        const stripe = await loadStripe('pk_test_51OInpfSDY4zO64ajt9jx4McsTdNvhmzYSzaDwL02rAL0y0ykUkI6RHP6k1d94iS368Gs7fRTrYvs8pBIijAsAaaj00tQIV7Puw');
        
        try {
            const response = await axios.post(`${URL}/create-checkout-session`,  cart );
            const sessionId = response.data.id;

            const result = await stripe.redirectToCheckout({ sessionId });
            if (result.error) {
                console.error(result.error.message);
            }
        } catch (error) {
            console.error("Error creating checkout session:", error);
        }
    }

    return (
        <div className="p-6 bg-gray-50">
            <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cart.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-4">
                            <div className="flex items-center mb-4 md:mb-0">
                                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded mr-4" />
                                <div>
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p className="text-sm text-gray-500">Price: ${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 mx-12">
                                    Remove
                                </button>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => addToCart({ ...item, quantity: 1 })}
                                        className="bg-gray-200 p-2 rounded-md hover:bg-gray-300">
                                        +
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button
                                        onClick={() => decreaseQuantity(item.id)} // Decrease quantity
                                        className="bg-gray-200 p-2 rounded-md hover:bg-gray-300">
                                        -
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between items-center mt-6">
                        <p className="text-xl font-bold mt-12 ml-6">Total: ${total.toFixed(2)}</p>
                        <div className="flex space-x-4">
                          {/* <Link to="/checkout" className="btn-primary mt-12"> Checkout </Link> */}
                            <button onClick={makePayment} className='btn-primary mt-12'>
                                Pay Now
                            </button>
                            <button onClick={clearCart} className="btn-secondary mt-12">
                                Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;
