import React from 'react'
import Laden01 from '../img/laden-aussen.jpg'
import Laden02 from '../img/laden-innen.jpg'

const About = () => {
    return(
        <div className="container">
            <h2 className="center">Über uns</h2>
        
            <div className="row">
                <div className="col l6 s12">
                    <h3>Der Hofladen</h3>
                    <p>
                    Seit ???? existiert unser kleiner Hofladen im, für berliner Verhältnisse eher ländlich gelegenen, Bezirk
                    Pankow-Blankenfelde. Nachdem wir unsere Waren übergangsweise aus einem Hänger direkt auf dem Hof verkauft haben, haben wir im Jahr 2019 keine
                    Kosten und Mühen gescheut und einen Teil unserer Scheune zu einem größeren Laden ausgebaut.
                    Meistens werden unsere Besucher nett von unserer Hündin Lina begrüßt, die sich nach getätigtem Einkauf oft über ein Leckerli freut.
                    Auch unsere Schafe werden gerne einmal von Groß und vor allem Klein besichtigt.
                    </p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <img src={Laden01} alt="Hofladen aussen" className="responsive-img" />
                </div>
            </div>
            
            <div className="row">
                <div className="col l6 s12 push-l6">
                    <h3>Das Team</h3>
                    <p>
                    Genau wie unser Hofladen, ist unser Team klein aber fein. Es besteht aus Patrick und Jörg. Mittwochs, donnerstags und freitags treffen Sie
                    Jörg in unserem Laden an, am Samstag kümmert sich Patrick um Sie. <br/> <br/> <br/> <br/>  
                    </p>
                </div>
                <div className="col l4 s12 pull-l6">
                    <img src={Laden02} alt="Hofladen innen" className="responsive-img" />
                </div>
            </div>
        
            
        </div>
    )
}

export default About
