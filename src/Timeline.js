import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import rose from './rose-blossom-bloom-red-rose-87469.jpeg';
import tulip from './tulip-persian-pearl.jpg'
import jasmine from './15-jasmine-flower-.jpeg'
import TimelineBlock from './TimelineBlock'

const flowers = [
    {
        "imageName": "Rose",
        "imageSource": rose
    },
    {
        "imageName": "Tulip",
        "imageSource": tulip
    },
    {
        "imageName": "Jasmine",
        "imageSource": jasmine
    }
]

class Timeline extends Component {
    constructor() {
        super()
        this.state = {
            names: { type: flowers },
            time: 0
        }
    }

    timer = setInterval(() => {
        if (this.state.time == this.state.names.type.length - 1) {
            this.setState({ time: 0 })
        }
        else {
            this.setState({ time: this.state.time + 1 })
        }
    }
        , 2000)



    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1>
                        Flowers
                </h1>
                    <div>
                        {
                            flowers.map(flower => (
                                <TimelineBlock name={flower.imageName} image={flower.imageSource} />
                            ))
                        }
                    </div>
                </div>
                <div className="burstMode">
                    <center>
                        <img src={this.state.names.type[this.state.time].imageSource} />
                        <div className= "flowerName">
                            {this.state.names.type[this.state.time].imageName}
                        </div>
                    </center>


                </div>

            </div>
        );
    }
}
export default Timeline;