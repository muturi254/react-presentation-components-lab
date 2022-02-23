// Code SimpleComponent Here
import React, { Component } from 'react';
import SimplerComponent from './SimplerComponent';

class SimpleComponent extends Component {

    constructor() {
        super();
        this.state = {
            mood: 'happy',
        }
    }

    handleClick = () => {
        let mood = this.state.mood;
        this.setState({
            mood: mood === 'happy' ? 'sad' : 'happy'
        })
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>I am <em>{ this.state.mood }</em> today </h1>
            </div>
        )
            
    }
}

export default SimpleComponent;