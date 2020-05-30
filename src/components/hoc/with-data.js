import React, { Component } from 'react';

const withData = (View) => {

    return class extends Component {

        state = {
            data: null
        }

        componentDidMount() {
            this.update();
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }
    }

}

export {
    withData
}

