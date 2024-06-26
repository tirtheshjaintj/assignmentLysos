import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Cart({ cart ,setCart}) {
    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
const handleRemoveFromCart=(i)=>{
const newCart=cart.filter((item,index)=>index!=i);
setCart(newCart);
}
    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Cart</h2>
            <div className="grid grid-cols-1 gap-4">
                {cart.map((item,i) => (
                    <div key={item.id} className="p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    {item.name} - {item.quantity} {item.unit}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                    ${item.totalPrice.toFixed(2)}
                                </div>
                            </div>
                            <div>
                                <button
                                    className="p-1 text-red-500 hover:text-red-700 transition duration-300"
                                    onClick={() => handleRemoveFromCart(i)}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className="text-lg font-semibold mt-4">Total: ${total.toFixed(2)}</h3>
        </div>
    );
}

export default Cart;
