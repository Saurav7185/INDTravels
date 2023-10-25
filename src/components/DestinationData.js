import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component{
    render(){
        return (
            <div className={this.props.cName}>
            <div className='des-text'>
                <h2>{this.props.heading}</h2>
                <p>
                {this.props.text}
                </p>
            </div>
            <div className='image'>
                <img alt='img' src={this.props.i1}/>
                <img alt='img' src={this.props.i2}/>
            </div>
        </div>
        )
    }
}

export default DestinationData;