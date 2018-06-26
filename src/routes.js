import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './components/About_us';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Blogs from './components/Blogs';
import Order from './components/Order';
import Footer from './components/Footer';

export default (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/review" component={Reviews} />
            <Route path="/blog" component={Blogs} />
            <Route path="/orders" component={Order} />
            <Route path="https://www.instagram.com" components={Footer} />
        </Switch>
    </div>
)