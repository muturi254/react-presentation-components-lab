// Code SimpleComponent Here
import React, { Component } from 'react';

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
            <div onClick={this.handleClick}><em>{ this.state.mood }</em></div>

        )
            
    }
}

export default SimpleComponent;