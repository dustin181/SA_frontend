import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Card from "./Card";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/:user' component={Card} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;