import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";



const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </div>
        </BrowserRouter>
    )
}

export default App;