import React, { useState, useEffect } from 'react';
import img1 from '../assets/hero-img-1.png';
import img2 from '../assets/hero-img-2.jpg';
import '../style/ImageSlider.css'; // Import the CSS file

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const images = [img1, img2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000); // 5000ms = 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className='slider'>
            <button className='prev' onClick={handlePrev}>❮</button>
            <div className='slider-images' style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className='slide'
                    />
                ))}
            </div>
            <button className='next' onClick={handleNext}>❯</button>
        </div>
    );
}

export default ImageSlider;
