import React from 'react';
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return(
        <footer className="page-footer green darken-3">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5>Öffnungszeiten:</h5>
                        <p>Mittwoch: 10.00 - 18.00 Uhr<br></br>
                        Donnerstag: 10.00 - 18.00 Uhr<br></br>
                        Freitag: 10.00 - 18.00 Uhr<br></br>
                        Samstag: 10.00 - 18.00 Uhr<br></br>
                        </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5>Kontakt:</h5>
                        <ul>
                            <li><NavLink to="/contact" className="white-text">Kontakt</NavLink></li>
                            <li><NavLink to="/impressum" className="white-text">Impressum</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
                <div className="footer-copyright green darken-4">
                    <div className="container center-align">
                        &copy; 2020 Blankenfelder Hofladen
                </div>
            </div>
        </footer>
    )
}


export default Footer