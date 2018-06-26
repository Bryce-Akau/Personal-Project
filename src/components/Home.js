import React from 'react';
import Slides from '../StatelessComp/Slides';
import '../css/home.css';
import Header from './Header';
import Top from './Top';
import Footer from './Footer';

function Home(){
    return(
        <div className="home">
        {/* <Top />
        <Header /> */}
        <div className='sliders'>
            {/* <h1>Aloha and Welcome</h1> */}
            <Slides />
            {/* <h1>Aloha and Welcome</h1> */}
        </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Home;

// DO NOT DELETE THIS COMPONENT! ALREADY DELETED 5 TIMES. VERY IMPORTANT PAGE!!!!