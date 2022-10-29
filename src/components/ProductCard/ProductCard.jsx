import React from "react";
import './ProductCard.css';

const ProductCard = ({ image, title, description, price }) => {
    return(
        <div className="product-card">
            <img src={image} />
            <div className="product-description">
                <p className="product-title">{title}</p>
                <p className="product-about">{description}</p>
                <p className="product-price">${price}</p>
            </div>
        </div>
    );
}

export default ProductCard;