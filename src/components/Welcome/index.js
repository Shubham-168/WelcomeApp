import {Component} from 'react'
import './index.css'

class Welcome extends Component{
    state = {text : "Subscribe"}

    onClick = () => {
        this.setState( (prevState) => {
            if (prevState.text === "Subscribe"){
                return {text : "Subscribed"}
            }
            else{
                return {text : "Subscribe"}
            }
        } )
    }

    render(){
        const {text} = this.state
        return (
            <div className = "bg-container">
                <h1 className = "main-heading"> Welcome </h1>
                <p className = "para"> Thank you! Happy Learning </p>
                <button className = "button" onClick = {this.onClick}> {text} </button>
            </div>
        )
    }
}


export default Welcome



