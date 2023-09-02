import React from 'react'
import ImageSlider from './ImageSlider';
import img1 from "@/app/assets/images/img1.jpeg";
import img2 from "@/app/assets/images/img2.jpg";
import img3 from "@/app/assets/images/img3.jpg";
import img4 from "@/app/assets/images/img4.jpg";
import img5 from "@/app/assets/images/img5.jpg";
import img6 from "@/app/assets/images/img6.jpg";

const Carousel = () => {
    const slides = [
        { urls: img1, title: 'online store carousel image' },
        { urls: img2, title: 'online store carousel image' },
        { urls: img3, title: 'online store carousel image' },
        { urls: img4, title: 'online store carousel image' },
        { urls: img5, title: 'online store carousel image' },
        { urls: img6, title: 'online store carousel image' }

    ];
    const containerStyles = {
        width: '100%',
        height: '65vh',
        margin: 'auto'
    }as React.CSSProperties
    return (
        <div style={containerStyles}>
            <ImageSlider slides={slides} />
        </div>
    )
}

export default Carousel