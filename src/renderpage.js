
import React, {Component} from 'react';

class Sample extends Component{

    render(){
        return(
            <div className="bodyWrap">

                    <UserDeatails name="raja"/> 
                    <UserDeatails name="Krishna"/>       
                    <UserDeatails name="pradeep"/>       

            </div>
        );
    }

}

function UserDeatails(props){
    return(
        <div>
            {props.name}
        </div>
    );
}

export default Sample;

/*
<div className="col-lg-4">
<div className="image2">
    <h1>
        Image 2
    </h1>
    <button onClick="">
        Show details
    </button>
</div>
</div>
<div className="col-lg-4">
<div className="image3">
    <h1>
        Image 3
    </h1>
    <button onClick="">
        Show details
    </button>
</div>
</div>


<button onClick={this._showMessage.bind(this, true)}>
                                    Show details
                                </button>
                                {this.state.showMessage && (<div>this is the image description
                                    <button onClick={this._showMessage.bind(this, false)}>hide</button>
                                </div>)}
*/