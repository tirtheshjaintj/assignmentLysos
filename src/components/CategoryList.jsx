import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faShoppingBag, faPizzaSlice, faCoffee } from '@fortawesome/free-solid-svg-icons';

function CategoryList({ categories, onSelect }) {
    const getCategoryIcon = (index) => {
        switch (index % 4) {
            case 0:
                return  faPizzaSlice;
            case 1:
                return  faCoffee;
            case 2:
                return faChevronRight;
            case 3:
                return faShoppingBag;
            default:
                return faChevronRight;
        }
    };

    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Select Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((category, index) => (
                    <div 
                        key={category.id} 
                        onClick={() => onSelect(category)}
                        className="cursor-pointer flex text-center justify-center items-center overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                    >
                    <div className="div">
                        <div className="flex items-center justify-center h-20 w-20 mb-2 rounded-full bg-blue-500 text-white text-2xl">
                            <FontAwesomeIcon icon={getCategoryIcon(index)} />
                        </div>
                        <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">{category.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{category.description}</div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 bg-gray-800 bg-opacity-75 text-white ">
                            <FontAwesomeIcon icon={getCategoryIcon(index)} className="text-2xl" />
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryList;
