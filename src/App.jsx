import React, { useEffect, useState } from 'react';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Invoice from './components/Invoice';
import { SunIcon, MoonIcon } from '@heroicons/react/solid'; // Correct path for heroicons
import './index.css';
const categories = [
    { id: 1, name: 'Pizza Box', unit: 'boxes' },
    { id: 2, name: 'Cup', unit: 'leads' },
    { id: 3, name: 'Paper', unit: 'kg' },
    { id: 4, name: 'Pockets', unit: 'kg' },
];

const products = {
    1: [
        { id: 1, name: 'Small Pizza Box', price: 10 },
        { id: 2, name: 'Medium Pizza Box', price: 15 },
        { id: 3, name: 'Large Pizza Box', price: 20 },
    ],
    2: [
        { id: 4, name: 'Small Cup', price: 1 },
        { id: 5, name: 'Medium Cup', price: 1.5 },
        { id: 6, name: 'Large Cup', price: 2 },
    ],
    3: [
        { id: 7, name: 'A4 Paper', price: 0.1 },
        { id: 8, name: 'A3 Paper', price: 0.2 },
    ],
    4: [
        { id: 9, name: 'Small Pocket', price: 5 },
        { id: 10, name: 'Large Pocket', price: 10 },
    ],
};

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [cart, setCart] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const addToCart = (product, quantity) => {
        const existingItem = cart.find(item => item.id === product.id);
    
        if (existingItem) {
            // If the item already exists in the cart, update its quantity
            const updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            );
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setCart(updatedCart);
        } else {
            // If the item doesn't exist in the cart, add it
            const newItem = {
                ...product,
                quantity,
                unit: selectedCategory.unit,
                totalPrice: product.price * quantity,
            };
            const updatedCart = [...cart, newItem];
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            setCart(updatedCart);
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(()=>{
        if(!localStorage.getItem("cart")){
           localStorage.setItem("cart",[]);
        }
        else{
           setCart(JSON.parse(localStorage.getItem("cart")));
        }
    },[]);

    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="container mx-auto p-4 dark:bg-gray-900 dark:text-white min-h-screen">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Paper Bag Shop</h1>
                    <button onClick={toggleDarkMode} className="p-2 rounded">
                        {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                    </button>
                </div>
                <CategoryList categories={categories} onSelect={handleCategorySelect} />
                {selectedCategory && (
                    <ProductList
                        products={products[selectedCategory.id]}
                        unit={selectedCategory.unit}
                        onAddToCart={addToCart}
                    />
                )}
                <Cart cart={cart} setCart={setCart} />
                {cart.length > 0 && <Invoice cart={cart}  />}
            </div>
        </div>
    );
}

export default App;
