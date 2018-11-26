import React, { Component } from 'react';
import './App.css';
import ImageBlock from './Imageblock'
import './Navbar.css';
import './Home.css';

class Home extends Component {
    // constructor() {
    //     super()
    //     this.state = { display: false }
    //     // this._showMessage = this._showMessage.bind(null, true);
    // }
    // _showMessage = (bool) => {
    //     this.setState({
    //         showMessage: bool
    //     });
    // }

    


    render() {
        return (
            <div className="container">
                <div className="row">

                    <ImageBlock imageName="firstImage" buttonName="firstButton" description="This is the first page description" />
                    <ImageBlock imageName="secondImage" buttonName="firstButton" description="This is the second page description" />
                    <ImageBlock imageName="thirdImage" buttonName="firstButton" description="This is the third page description" />

                </div>
            </div>
        );
    }
}

export default Home;

