import React from 'react'
import Brot from '../img/brot.jpg'
import Eier from '../img/eier.jpg'
import Slideshow from './Slideshow'


const Home = () => {
    return(
        <div className="Home">
            <Slideshow />
            <div className="container">
                <div className="row">
                    <div className="col l4 s12">
                        <div className="center">
                            <i className="large material-icons">home</i>
                            <h4>Unsere Adresse</h4>
                            <p>Blankenfelder Hofladen <br></br>Hauptstraße 29B<br></br> 13159 Berlin</p>
                            <p>Tel.: 0171 684 04 74</p>
                            <p>Öffnungszeiten: <br></br> Mi. - Sa.: 10.00 - 18.00 Uhr</p>
                        </div>    
                    </div>
                    <div className="col l4 s12">
                        <div className="center">
                            <i className="large material-icons">directions_car</i>
                            <h4>Ihr Weg zu uns</h4>
                            <p>Falls Sie mit dem Auto oder Fahrrad kommen, finden Sie uns
                                <a href="https://www.google.de/maps/place/Hauptstra%C3%9Fe+29,+13159+Berlin/@52.6191312,13.3904627,16.75z/data=!4m5!3m4!1s0x47a853278da27fcf:0xc4bd334bffc30e79!8m2!3d52.6190708!4d13.3923246"> hier </a>
                                auf Google Maps.
                            </p>
                            <p>Mit den öffentlichen Verkehrsmitteln erreichen Sie uns mit dem Bus 107.
                                Von der Haltestelle Blankenfelde Kirche sind es ca. 210m Fußweg bis zu unserem Laden. </p>
                        </div>    
                    </div>
                    <div className="col l4 s12">
                    <div className="center">
                            <i className="large material-icons">group</i>
                            <h4>Unser Partner</h4>
                            <p>Brotbackstube49 <br></br> Bäckerei und Backschule <br></br>Hauptstraße 49<br></br> 13159 Berlin</p>
                            <a href="https://www.backkurse-in-berlin.de">zur Homepage</a>
                        </div>    
                    </div>
                </div>
                <div className="row">
                    <div className="col l6 s12">
                        <div className="card large brown lighten-4">
                            <div className="card-image">
                                <img src={Brot} alt="brot" />
                            </div>
                            <div className="card-content">
                                <span className="card-title">Frisches Brot</span>
                                <p>
                                Jeden Mittwoch und Freitag ist bei uns Brottag. Dabei beziehen wir unser Brot von unserem Partner, der Brotbackstube49, wo es nach traditionellem
                                Herstellungsferfahren gebacken wird.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col l6 s12">
                        <div className="card large brown lighten-4">
                            <div className="card-image">
                                <img src={Eier} alt="eier" />
                            </div>
                            <div className="card-content">
                                <span className="card-title">Eier, wir haben Eier</span>
                                <p>Die meisten unserer Kunden kommen wegen unseren frischen Eiern. Dabei beziehen wir diese ausschließlich aus Bio- 
                                    oder Freilandhaltung. Sie erhalten unsere Eier in den Größen L und XL.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home