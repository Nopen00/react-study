import React from 'react';
import ProductCard from './ProductCard';

const Product = () => {
    const Product = {
        name: 'laptop',
        price: 123.456,
    };

    return (
        <div>
            <ProductCard name = {Product.name} price = {Product.price} formatPrice = {(p)=> `$${p.toFixed(2)}`} />
        </div>
    );
};

export default Product;