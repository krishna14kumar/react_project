
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import users from './Userdetails.json';
import './Forms.css';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }
    handleChange(event) {
        this.setState({ username: event.target.value });
    }
    handlePassword(event) {
        this.setState({ password: event.target.value });
    }
    handleSubmit(event) {
        console.log("User: " + this.state.username)
        console.log("pswd: " + this.state.password)

        // users.users.forEach(user => {
        //     if (user.username === this.state.username && user.password === this.state.password) {
        //         console.log("------------------------------------>", user)
        //         this.props.history.push('/home')

        //     }
        //     else{
        //         this.props.history.push('/error')
        //         console.log("wrong data", user)
        //     }
        // });
        for (var i = 0; i < users.users.length; i++) {
            if (users.users[i].username === this.state.username && users.users[i].password === this.state.password) {
                this.props.history.push('/home');
                break;
            }
            else {
                this.props.history.push('/error');
            }
        }
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form className="formData" onSubmit={this.handleSubmit}>
                    <label>
                        User Name:<br />
                        <input type="text" value={this.state.username} onChange={this.handleChange} /><br /><br />
                        Password:<br />
                        <input type="password" value={this.state.password} onChange={this.handlePassword} /><br /><br />
                        <input type="submit" value="Login" />
                    </label>
                </form>
            </div>
        );
    }
}
export default Forms;