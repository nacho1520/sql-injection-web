import React from "react";
import './ProductCard.css';

const ProductCard = props => {
    return(
        <div className="product-card">
            <img src={props.image} />
            <div className="product-description">
                <p className="product-title">{props.title}</p>
                <p className="product-about">{props.description}</p>
                <p className="product-price">${props.price}</p>
            </div>
        </div>
    );
}

export default ProductCard;