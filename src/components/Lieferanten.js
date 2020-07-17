import React, { Component } from 'react'

class Lieferenten extends Component {
    render(){
        return(
            <div className="container">
                <h2 className="center">Unsere Lieferanten</h2>
                <p>
                In Zeiten von Massentierhaltung und industriell angebautem Obst und Gemüse, tun wir unser Bestes, um unsere Produkte aus ökologisch nachhaltigen 
                Quellen zu beziehen. Daher verkaufen wir überwiegend Produkte aus regionaler Erzeugung. Da wir für Sie transparent sein wollen, können Sie hier 
                eine Liste unserer wichtigsten Lieferanten einsehen. Sollten Sie dennoch Fragen zur Herkunft unserer Produkte haben, können Sie uns gerne persönlich 
                im Laden ansprechen. 
                </p>

                <ul className="collection with-header z-depth-1 center">
                    <li className="collection-header">
                        <h5>Muster Lieferant</h5>
                    </li>
                    <li className="collection-item">
                        <div>
                            <p>Musterstrasse 100 <br/>
                            13456 Musterhausen</p>
                            <a href="#">zur Homepage</a>
                        </div>   
                    </li>
                    <li className="collection-header">
                        <h5>Muster Lieferant</h5>
                    </li>
                    <li className="collection-item">
                        <div>
                            <p>Musterstrasse 100 <br/>
                            13456 Musterhausen</p>
                            <a href="#">zur Homepage</a>
                        </div>   
                    </li>
                    <li className="collection-header">
                        <h5>Muster Lieferant</h5>
                    </li>
                    <li className="collection-item">
                        <div>
                            <p>Musterstrasse 100 <br/>
                            13456 Musterhausen</p>
                            <a href="#">zur Homepage</a>
                        </div>   
                    </li>
                    
                </ul>
            </div>
        )
    }
}

export default Lieferenten