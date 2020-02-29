import React, { Component } from 'react';

class SharedButton extends Component {

    submitEvent() {
        if (this.props.emitEvent) {
            this.props.emitEvent();
        }
    }

    render() {
        const { buttonText } = this.props;
        return (
            <button
                onClick={() => this.submitEvent()}
                data-test="buttonComponent">
                {buttonText}
            </button>
        );
    }
}

export default SharedButton;