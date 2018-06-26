import React from 'react';
import makapuu from '../SliderImages/makapuu.jpg';
import './singleImg.css';

const slide5 = () => {
    return (
        <div className='slides'>
            <div>
                <img src={makapuu} alt="light house"/>
            </div>
        </div>
    )
}

export default slide5;