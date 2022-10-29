import React from "react";
import './ProductBanner.css';

const ProductBanner = ({ name, price, image, description }) => {
    return(
        <div className="banner">
            <div className="image-container">
                <img src={image} />
            </div>
            <div className="description-container">
                <div className="name-container">
                    <p>{name}</p>
                </div>
                <div className="about-container">
                    <p>{description}</p>
                </div>
                <div className="price-container">
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductBanner;