import React, { useState } from "react";
import banner1 from '../../assets/images/banner1.avif';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.avif';
import './ImageCarousel.css';

const ImageCarousel = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [banner1, banner2, banner3];

    const handleForward = () => {
        if(imageIndex < images.length - 1) {
            setImageIndex(imageIndex + 1);
        } else {
            setImageIndex(0);
        }
    }

    const handleBack = () => {
        if(imageIndex > 0){
            setImageIndex(imageIndex - 1);
        } else {
            setImageIndex(images.length - 1);
        }
    }

    return(
        <div className="carousel">
            <button className="forward btn" onClick={handleForward}><i className="fa-solid fa-arrow-right"></i></button>
            <button className="back btn" onClick={handleBack}><i className="fa-solid fa-arrow-left"></i></button>
            <img src={images[imageIndex]} />
        </div>
    );
}

export default ImageCarousel;