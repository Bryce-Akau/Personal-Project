import React from 'react';
import sharkscove from '../SliderImages/sharkscove.jpg';
import './singleImg.css';

const slide4 = () => {
    return (
        <div className='slides'>
            <div>
                <img src={sharkscove} alt="turtle"/>
            </div>
        </div>
    )
}

export default slide4;