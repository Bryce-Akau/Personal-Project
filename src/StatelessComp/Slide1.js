import React from 'react';
import mine from '../SliderImages/mine.jpg';
import './singleImg.css';

const slide1 = () => {
    return (
        <div className='slides'>
            <div>
                <img src={mine} alt="light house"/>
            </div>
        </div>
    )
}

export default slide1;