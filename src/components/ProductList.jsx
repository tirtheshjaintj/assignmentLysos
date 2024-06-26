import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function ProductList({ products, unit, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Select Products</h2>
            <div className="grid grid-cols-1 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">{product.name}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">${product.price} per {unit}</div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Number(e.target.value))}
                                    min="1"
                                    className="ml-2 p-1 border rounded w-16 text-center dark:bg-gray-700 dark:border-gray-600"
                                />
                                <button 
                                    onClick={() => onAddToCart(product, quantity)}
                                    className="ml-2 p-2 bg-blue-500 text-white rounded flex items-center justify-center hover:bg-blue-600 transition duration-300"
                                >
                                    <FontAwesomeIcon icon={faCartPlus} className="mr-1" />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
