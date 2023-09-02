"use client"
import React, { useState, useEffect } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import img1 from "@/app/assets/images/img2.jpg"



const ImageSlider = ({ slides }: any) => {
    const [currentIdx, setCurrentIdx] = useState<number>(0);

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:`url(${slides[currentIdx].urls.src})`
    }as React.CSSProperties;

    const sliderStyles = {
        height: "100%",
        position: "relative",

    }as React.CSSProperties

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
        left: "20px",
        fonstSize: "145",
        color: "#b2b2b2",
        zIndex: 1,
        cursor: "pointer",

    }as React.CSSProperties;

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
        right: "20px",
        fonstSize: "45",
        color: "#b2b2b2",
        zIndex: 1,
        cursor: "pointer",
    }as React.CSSProperties;

    const dotContainerStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }as React.CSSProperties;

    const dotStyles = {
        margin: "0 3px",
        cursor: "pointer",
        Color: "#c4c4c4"
    }as React.CSSProperties;

    const goToPrev = () => {
        const isFirstSlide = currentIdx === 0
        const newIndx = isFirstSlide ? slides.length - 1 : currentIdx - 1
        setCurrentIdx(newIndx)
    }
    const goToNext = () => {
        const isLastSlide = currentIdx === slides.length - 1
        const newIndx = isLastSlide ? 0 : currentIdx + 1
        setCurrentIdx(newIndx)
    }
    const goToSlides = (slideIndex: number) => {
        setCurrentIdx(slideIndex)
    }

    useEffect(() => {
        const interval = setInterval(() =>setCurrentIdx((prev)=>prev===slides.length-1?0:prev+1), 5000);
        return () => {
          clearInterval(interval);
        }
      }, [currentIdx,slides.length])
    

    return (
        <div style={sliderStyles} className="">
            <div style={leftArrowStyles} onClick={goToPrev}><ArrowBackIosIcon fontSize='large'/></div>
            <div  style={rightArrowStyles} onClick={goToNext}><ArrowForwardIosIcon fontSize='large' /></div>
            <div style={slideStyles}></div>
            <div style={dotContainerStyles}>
                {slides.map((slide: any, slideIndex: number) => (
                    <div key={slideIndex} style={dotStyles} className={` py-4 dotStyles ${currentIdx === slideIndex ? " text-red-800" : "text-[#c4c4c4]"}`} onClick={() => goToSlides(slideIndex)}><CircleIcon /></div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlider