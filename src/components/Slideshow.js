import React from 'react';
import { Slide } from 'react-slideshow-image';
import Slide01 from '../img/slide01.jpg'
import Slide02 from '../img/slide02.jpg'
import Slide03 from '../img/slide03.jpg'
import Slide04 from '../img/slide04.jpg'
import Slide05 from '../img/slide05.jpg'
import Slide06 from '../img/slide06.jpg'

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false
}

const Slideshow = () => {
    return(
        <div className="hide-on-med-and-down">
        <Slide {...properties}>
            <div className="each-slide">
                <img src={Slide01} alt="Slideshow-Picture-1" className="responsive-img"/>
            </div>
            <div className="each-slide">
                <img src={Slide02} alt="Slideshow-Picture-2" className="responsive-img"/>
            </div>
            <div className="each-slide">
                <img src={Slide03} alt="Slideshow-Picture-3" className="responsive-img"/>
            </div>
            <div className="each-slide">
                <img src={Slide04} alt="Slideshow-Picture-4" className="responsive-img"/>
            </div>
            <div className="each-slide">
                <img src={Slide05} alt="Slideshow-Picture-5" className="responsive-img"/>
            </div>
            <div className="each-slide">
                <img src={Slide06} alt="Slideshow-Picture-6" className="responsive-img"/>
            </div>
            
        </Slide>
        </div>
    )    
}


export default Slideshow