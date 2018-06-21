import React from 'react';
import '../css/top.css'
import hammer from '../TopImages/hammer.jpg';
import honu from '../TopImages/honu.jpg';
import mano from '../TopImages/mano.jpg';
import stingray from '../TopImages/stingray.jpg';

function Top(){
    return(
        <div className='phello'>
            <img src={stingray} alt="shark"/>
            <img src={hammer} alt="shark"/>
            <img src={mano} alt="honu"/>
            <img src={honu} alt="stingray"/>
            
        </div>
    )
}

export default Top;