import React from 'react';
import oahu from '../SliderImages/oahu-scuba-diving-05.jpg';
import './singleImg.css';

const slide3 = () => {
    return (
        <div className='slides'>
            <div>
                <img src={oahu} alt="turtle"/>
            </div>
        </div>
    )
}

export default slide3;