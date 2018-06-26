import React from 'react';
import jmHawaii from '../Logo/JMhawaii.svg';
import '../css/home.css';
import {Link} from 'react-router-dom';
import Profile from './Profile';

function Header(){
    const redirectUri = encodeURIComponent(`${window.location.origin}/callback`);
    const auth0LoginUrl = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
    return(
        <div className="Home">
            <div className="sub">
                <Link to="/" className="homeLink">
                    <img src={jmHawaii} className="logo" alt="JM hawaii branding logo" />
                </Link>
                <Link to="/about" className="link">About</Link> 
                <Link to="/gallery" className="link">Gallery</Link>
                {/* <Link to="/blogs" className="link">Blogs</Link> */}
                <Link to="/reviews" className="link">Reviews</Link>
                <Link to="/orders" className='link'>Order Here</Link>
                <a href={auth0LoginUrl}>Login</a>
                <Profile/>
            </div>
        </div>
    )
}

export default Header;