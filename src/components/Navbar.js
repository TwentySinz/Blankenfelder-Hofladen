import React, { Component } from 'react'
import {Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });
    }
    render(){
        return(
            <div>
            <nav className="nav-wrapper green darken-3">
                <div className="container">
                    <a className="brand-logo"><span className="hide-on-small-only">Blankenfelder</span><span className="hide-on-med-and-up">Ihr</span> Hofladen</a>
                    <a className="sidenav-trigger" data-target="mobile-links">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">Startseite</Link></li>
                        <li><NavLink to="/about">Über uns</NavLink></li>
                        <li><NavLink to="/angebote">Angebote</NavLink></li>
                        <li><NavLink to="/lieferanten">Lieferanten</NavLink></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-links">
                <li><Link to="/" className="sidenav-close">Startseite</Link></li>
                <li><NavLink to="/about" className="sidenav-close">Über uns</NavLink></li>
                <li><NavLink to="/angebote" className="sidenav-close">Unsere Angebote</NavLink></li>
                <li><NavLink to="/lieferanten" className="sidenav-close">Unsere Lieferanten</NavLink></li>
            </ul>
            </div>
        )
    }
}


export default Navbar