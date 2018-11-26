import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import './Signup.css';
import users from './Userdetails.json';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            ent_password: '',
            re_ent_password: '',
            errors: [],
            users: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleEnterPassword = this.handleEnterPassword.bind(this);
        this.handleRe_enterPassword = this.handleRe_enterPassword.bind(this);
        // this.confirmPassword = this.confirmPassword.bind(this);
    }
    handleChange(event) {
        this.setState({ username: event.target.value });
    }
    handleEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleEnterPassword(event) {
        this.setState({ ent_password: event.target.value });
    }
    handleRe_enterPassword(event) {
        this.setState({ re_ent_password: event.target.value });
    }
    // confirmPassword() {
    //     this.handleRe_enterPassword();
    //     if( re_ent_password === ent_password){
    //         return true;
    //     }
    //     else
    //         return false;

    // }
    // validate(value) {
                
    //     if (this.props.validate && this.props.validate(value)) {
    //         this.setState({
    //             valid: true,
    //             errorVisible: false
    //         });
    //     } else {
    //         this.setState({
    //             valid: false,
    //             errorVisible: true
    //         });
    //     }
    // } (validate={this.confirmPassword}) // in input tag

    validate(name, e_mail, pswd, rePswd) {
        // we are going to store errors for all fields
        // in a signle array
        const errors = [];
      
        if (name.length === 0) {
          errors.push("Name can't be empty");
        }
      
        if (e_mail.length < 5) {
          errors.push("Email should be at least 5 charcters long");
        }

        if (e_mail.indexOf('.') === -1) {
          errors.push("Email should contain at least one dot");
        }
      
        if (pswd.length < 6) {
          errors.push("Password should be at least 6 characters long");
        }
        if (pswd !== rePswd){
            errors.push("Passwords donot match");
        }
      
        return errors;
      }
    handleSubmit(event) {
        console.log("User: " + this.state.username)
        console.log("pswd: " + this.state.ent_password)
        console.log("mail: " + this.state.email)
        console.log("reenter password: " + this.state.re_ent_password)
        const name = this.state.username;
        const e_mail = this.state.email;
        const pswd = this.state.ent_password;
        const rePswd = this.state.re_ent_password;

        const errors = this.validate(name, e_mail, pswd, rePswd);
        if (errors.length > 0) {
            this.setState({ errors });
        }
        else{
            alert(this.state.username + '\'s have been added!');
        }
        event.preventDefault();

    //     if (this.state.re_ent_password === this.state.ent_password) {
    //         console.log("true")
    //         return true;
    //     }  
    //     else{
    //         console.log("false");
    //         return this.errormessage;
    //     }
    }
    render() {
        const  errors  = this.state.errors;
        return (
            <div>
                <form className="SignupData" onSubmit={this.handleSubmit} >
                
                {errors.map(error => (
          <p key={error}>Error: {error}</p>
        ))}
                    <label>
                        User Name:<br />
                    </label>
                    <input type="text" value={this.state.username} placeholder="Your Name.." onChange={this.handleChange} /><br /><br />
                    <label>
                        E-mail:<br />
                    </label>
                    <input type="email" value={this.state.email} placeholder="Your e-mail address.." onChange={this.handleEmail} /><br /><br />
                    <label>
                        Enter Password:<br />
                    </label>
                    <input type="password" value={this.state.ent_password} placeholder="Enter the password.." onChange={this.handleEnterPassword} /><br /><br />
                    <label>
                        Re-enter Password:<br />
                    </label>
                    <input type="password" value={this.state.re_ent_password} placeholder="Re-enter the password.." onChange={this.handleRe_enterPassword} /><br /><br />
                    <input type="submit" value="Sign up" />
                </form>
            </div>
        );
    }
}
export default Signup;