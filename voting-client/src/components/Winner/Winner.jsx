import React, {PureComponent} from 'react';

export default class Winner extends PureComponent {
    render() {
        const {winner} = this.props;

        return (
            <div className="winner">Winner is {winner}!</div>
        );
    }
}
