import React, {Component} from 'react';

export default class Winner extends Component {
    render() {
        const {winner} = this.props;

        return (
            <div className="winner">Winner is {winner}!</div>
        );
    }
}
