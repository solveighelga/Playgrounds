import React from 'react'
import './ImageSlider.scss'
import './ImageSlider.css'
import barnamynd0 from './Images/barnamynd0.png'
import barnamynd1 from './Images/barnamynd1.png'
import barnamynd2 from './Images/barnamynd2.png'
import {useState} from 'react'


const ImageSlider = () => {
    const [currentState, setCurrentState]= useState(0)
    const ImgSlide ={
        backgroundImage: `url(${barnamynd0[currentState].url})`,
    }
    return (
        <div className='container'>
            <div style={ImgSlide}></div>
        </div>
    
    )
}
export default ImageSlider