import React from 'react'

const Contact = () => {
    return(
        <div className="container">
            <h2 className="center">Kontakt</h2>
            <h5>Blankenfelder Hofladen</h5>
            <p>Hauptstraße 29B<br></br> 13159 Berlin</p>
            <p>Tel.: 0171 684 04 74</p>
            <p>Öffnungszeiten: <br></br> Mi. - Sa.: 10.00 - 18.00 Uhr</p>

            <h4>Kontaktformular</h4>
            <form>
                <div className="row">
                    <div className="input-field col s6">
                        <label for="name">Ihr Name</label>
                        <input id="name" type="text" className="validate"></input>
                    </div>
                    <div className="input-field col s6">
                        <label for="email">Ihre Emailadresse</label>
                        <input id="email" type="text" className="validate"></input>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <label for="betreff">Betreff</label>
                        <input id="betreff" type="text" className="validate"></input>
                    </div>   
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <label for="textarea1">Ihre Nachricht</label>
                        <textarea id="textarea1" className="materialize-textarea"></textarea>
                     </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className="btn grey">Senden</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact