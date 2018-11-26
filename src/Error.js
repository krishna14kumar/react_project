import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import image from './images.png';
import './Image.css';

class Error extends Component {

    render() {
        return (
            <div >
                <img src={image} /><br />
                <div className="error-text">
                    <h1>
                        Enter Correct USERNAME OR PASSWORD !
                                OR
                        Be a valid User to Login
                    </h1>
                </div>
            </div>
        );
    }
}
export default Error;