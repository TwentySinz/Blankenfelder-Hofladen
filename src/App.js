import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/UeberUns';
import Angebote from './components/Angebote';
import Lieferanten from './components/Lieferanten';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum'
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/angebote" component={Angebote}/>
        <Route path="/lieferanten" component={Lieferanten}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/impressum" component={Impressum}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
