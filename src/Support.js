
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import './Support.css';

class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            subject: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleLastname = this.handleLastname.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }
    handleChange(event) {
        this.setState({ firstName: event.target.value });
    }
    handleLastname(event) {
        this.setState({ lastName: event.target.value });
    }
    handleEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleComment(event) {
        this.setState({ subject: event.target.value });
    }
    handleSubmit(event) {
        console.log("firstname" +this.state.firstName);
        console.log("lastname: " + this.state.lastName)
        console.log("email: " + this.state.email)
        console.log("comment: " + this.state.subject)
        event.preventDefault();
    }
    render() {
        return (
            <div>
                We are happy to help you..:-)
                <form className="supportData" method="post" onSubmit={this.handleSubmit}>
                    <label>
                        First Name:<br />
                    </label>
                    <input type="text" value={this.state.firstName} placeholder="Your first name.." onChange={this.handleChange}/><br />
                    <label>
                        Last Name:<br />
                    </label>
                    <input type="text" value={this.state.lastName} placeholder="Your last name.." onChange={this.handleLastname}/><br />
                    <label>
                        E-mail:<br />
                    </label>
                    <input type="email" value={this.state.email} placeholder="Your e-mail address.." onChange={this.handleEmail}/><br />
                    <label>
                        Comment:<br />
                    </label>
                    <textarea type="text" value={this.state.subject} placeholder="Write Something..." onChange={this.handleComment}></textarea><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default Support;