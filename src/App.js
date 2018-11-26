import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Forms from "./Forms";
import Errors from "./Error";
import Timeline from "./Timeline";
import About from "./About";
import Support from "./Support";
import Signup from "./Signup";

class App extends React.Component {

    render() {

        return (
                <Router>
                    <div>
                    <div className="Nav-link">
                        <NavLink exact to="/home" >Home</NavLink>
                        <NavLink to="/timeline" >Timeline</NavLink>
                        <NavLink to="/about" >About</NavLink>
                        <NavLink to="/support" >Support</NavLink>
                        <li className="Logout">
                            <NavLink to="/" >Logout</NavLink>
                            <NavLink to="/signup">Sign up</NavLink>
                        </li>
                    </div>
                    <div>
                        <Route exact path="/" component={Forms} />
                        <Route path="/home" component={Home} />
                        <Route path="/error" component={Errors}/>
                        <Route path="/timeline" component={Timeline}/>
                        <Route path="/about" component={About}/>
                        <Route path="/support" component={Support}/>
                        <Route path="/logout" component={Forms}/>
                        <Route path="/signup" component={Signup} />
                    </div>
                    </div>
                </Router>
        );
    }
}
export default App;
