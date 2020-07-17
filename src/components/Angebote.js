import React from 'react'
import Radieschen from '../img/radieschen.jpg'
import Pastinaken from '../img/pastinaken.jpg'
import Paprika from '../img/paprika.jpg'
import Aepfel from '../img/aepfel.jpg'
import Leinoel from '../img/leinoel.jpg'
import Leberwurst from '../img/leberwurst.jpg'

const Angebote = () => {
    return(
        <div className="container">
            <h2 className="center">Unsere Angebote</h2>
            <p>Sie finden bei uns ein reichhaltiges Angebot an Obst und Gemüse. Darüber hinaus verkaufen wir frisches Brot, Eier, Käse, 
                Wurst, diverse Säfte und Bier. Überwiegend beziehen wir unsere Produkte von regionalen Erzeugern. In der folgenden Liste können Sie sich
                eine kleine Auswahl unserer Produkte ansehen.
            </p>
            <h4>Gemüse</h4>
            <ul className="collection">
                <li className="collection-item avatar">
                    <img src={Radieschen} alt="radieschen" className="circle" />
                    <span className="title">Radieschen</span>
                    <p>Erhältlich saisonal Mai bis September</p>
                </li>
                <li className="collection-item avatar">
                    <img src={Pastinaken} alt="pastinaken" className="circle" />
                    <span className="title">Pastinaken</span>
                    <p>Erhältlich permanent</p>
                </li>
                <li className="collection-item avatar">
                    <img src={Paprika} alt="paprika" className="circle" />
                    <span className="title">Paprika</span>
                    <p>Erhältlich permanent</p>
                </li>
            </ul>
            <h4>Obst</h4>
            <ul className="collection">
                <li className="collection-item avatar">
                    <img src={Aepfel} alt="äpfel" className="circle" />
                    <span className="title">Äpfel</span>
                    <p>Erhältlich permanent</p>
                </li>
            </ul>
            <h4>Sonstiges</h4>
            <ul className="collection">
                <li className="collection-item avatar">
                    <img src={Leinoel} alt="leinoel" className="circle" />
                    <span className="title">Leinöl</span>
                    <p>Erhältlich permanent</p>
                </li>
                <li className="collection-item avatar">
                    <img src={Leberwurst} alt="leberwurst" className="circle" />
                    <span className="title">Leberwurst</span>
                    <p>Erhältlich permanent</p>
                </li>
            </ul>
        </div>
    )
}

export default Angebote