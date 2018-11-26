import React, { Component } from 'react';

class ImageBlock extends Component {
    constructor(props){
        super(props)
        this.state={display : false}
    }
    
    showMessage(bool) {
        console.log("check")
        this.setState({display : bool});
    }
    render (){
        return (
            <div className="col-lg-4">
                <div className="blockWrap">
    
                    <h1>
                        {this.props.imageName}
                    </h1>
    
                    <button onClick={this.showMessage.bind(this, true)}>{this.props.buttonName}</button>
                    {this.state.display && (<div>
                        {this.props.description}
                        <button onClick={this.showMessage.bind(this, false)}>hide</button>
                        </div>)}
    
                </div>
    
    
            </div>
        );
    }
    
}
export default ImageBlock;