import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import jsPDF from 'jspdf';

function Invoice({ cart }) {
    const generatePDF = () => {
        const doc = new jsPDF();
        let yOffset = 10;

        doc.setFontSize(20);
        doc.text(20, yOffset, 'Invoice');
        yOffset += 10;

        cart.forEach((item) => {
            doc.setFontSize(12);
            doc.text(20, yOffset, `${item.name} - ${item.quantity} ${item.unit} - $${item.totalPrice.toFixed(2)}`);
            yOffset += 10;
        });

        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        doc.setFontSize(16);
        doc.text(20, yOffset, `Total: $${total.toFixed(2)}`);

        doc.save('invoice.pdf');
    };

    return (
        <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Invoice</h2>
            <div className="flex items-center">
                <button 
                    onClick={generatePDF}
                    className="flex items-center p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                >
                    <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                    Generate Invoice PDF
                </button>
            </div>
        </div>
    );
}

export default Invoice;
