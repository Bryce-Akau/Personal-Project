import React from 'react';
import sting from '../SliderImages/sting.jpg';
import './singleImg.css';

const slide2 = () => {
    return (
        <div className='slides'>
            <div>
                <img src={sting} alt="sting ray"/>
            </div>
        </div>
    )
}

export default slide2;