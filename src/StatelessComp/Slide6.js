import React from 'react';
import barracuda from '../SliderImages/barracuda-school-dreamstime_s_30848576-sm350.jpg';
import './singleImg.css';

const slide3 = () => {
    return (
        <div className='slides'>
            <div>
                <img src={barracuda} alt="barracuda"/>
            </div>
        </div>
    )
}

export default slide3;