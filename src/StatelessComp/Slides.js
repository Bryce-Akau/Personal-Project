import React, { Component } from 'react';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
// import Slide3 from './Slide3';
import Slide4 from './Slide4';
// import Slide5 from './Slide5';
// import Slide6 from './Slide6';
import './slides.css';

export default class  extends Component {
    constructor(){
        super()
        this.state = {
            slides: 3,
            slide: 1
        }
    }

    prev = () => {
        const { slide, slides } = this.state
        if( slide === 1){
            this.setState({ slide: 3})
        } else {
            this.setState({ slide: this.state.slide - 1})
        }
    }

    next = () => {
        const { slide, slides} = this.state
        if (slide === 3){
            this.setState({ slide: 1})
        } else {
            this.setState({ slide: this.state.slide + 1})
        }  
    }

    handleClick = val => {
        this.setState({ slide: val })
    }

    render() {
        const { slide } = this.state
        return (
            <div className='landing'>
                <div>
                    {slide === 1 ? <Slide1/> : null}
                    {slide === 2 ? <Slide2/> : null}
                    {slide === 3 ? <Slide4/> : null}
                    {/* {slide === 4 ? <Slide4/> : null}
                    {slide === 5 ? <Slide5/> : null}
                    {slide === 6 ? <Slide6/> : null} */}
                    {/* <a className='prev' onClick={this.prev}>&#10094;</a>
                    <a className='next' onClick={this.next}>&#10095;</a> */}
                </div>
                <div className='dots'>
                    <span className="dot" onClick={() => this.handleClick(1)}></span> 
                    <span className="dot" onClick={() => this.handleClick(2)}></span> 
                    <span className="dot" onClick={() => this.handleClick(3)}></span>
                    {/* <span className="dot" onClick={() => this.handleClick(4)}></span> 
                    <span className="dot" onClick={() => this.handleClick(5)}></span> 
                    <span className="dot" onClick={() => this.handleClick(6)}></span>  */}
                </div>
            </div>
        )
    }
}