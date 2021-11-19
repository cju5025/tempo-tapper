import { Component } from 'react';

import './button.css'

export default class Button extends Component {

    handleClick () {
        console.log(Date.now())
    }

    render () {
        return (
            <button id="tempo-tap-button" onClick={this.handleClick}></button>
        )
    }
}

