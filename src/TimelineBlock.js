import React, { Component } from 'react';
import "./TimelineImage.css";
import flowers from "./flowers.json"
// import rose from './rose-blossom-bloom-red-rose-87469.jpeg';

// const flowers = [
//     {
//         "imageName": "Rose",
//         "imageSource": rose
//     },
//     {
//         "imageName": "Rose",
//         "imageSource": rose
//     }
// ]

class TimelineBlock extends Component {


    render() {
        return (
            <div className="col-lg-4">
                <div className="blockWrap">
                    <ul className ="image">
                        <li>
                            <center>
                            <img src={this.props.image}></img>
                            </center>
                            
                            <div className= "flowerName">{this.props.name}</div>
                        </li>
                    </ul>

                </div>

            </div>
        );
    }

}
export default TimelineBlock;