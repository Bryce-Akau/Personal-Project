import React from 'react';
import '../css/footer.css';
import ig from '../download.jpg';

function Footer(){
    return (
        <div className='footer'>
            <div>
                <h1>
                    <p>Follow Us On Instagram</p>
                    <a href="https://www.instagram.com/bryce.akau/" className='ig'><img src={ig} className='insta' alt="insta"/></a>
                </h1>
            </div>
        </div>
    )
}

export default Footer;