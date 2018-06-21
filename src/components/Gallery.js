import React from 'react';
import '../css/gallery.css';
import right from '../Gallery/right.jpg';
import left from '../Gallery/left.jpg';
import center from '../Gallery/center.jpg';
import stick1 from '../Gallery/right1.jpg';
import stick2 from '../Gallery/center1.jpg';
import stick3 from '../Gallery/left1.jpg';
import jm from '../Gallery/IMG_7305-533x400.jpg';
import jm2 from '../Gallery/jmhawaiispearguns7.jpg';
import jm3 from '../Gallery/jmhawaiispearguns8.jpg';

function Gallery(){
    return(
        <div>
           <div className="gallery">
                <div className="photos">
                    <div className="firstrow">
                        <img src={right} alt="right pic"/>
                        <img src={center} alt="center pic"/>
                        <img src={left} alt="left pic"/>
                    </div>
                    <div className="secondrow">
                        <img src={stick1} alt="stick1"/>
                        <img src={stick2} alt="stick2"/>
                        <img src={stick3} alt="stick3"/>
                    </div>
                    <div className="thirdrow">
                        <img src={jm} alt="jm"/>
                        <img src={jm2} alt="jm2"/>
                        <img src={jm3} alt="jm3"/>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Gallery;