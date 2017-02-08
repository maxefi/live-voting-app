import React, {Component} from 'react';

class Voting extends Component {
    getPair() {
        const {pair} = this.props;

        return pair || [];
    }

    render() {
        return (
            <div className="voting">
                {this.getPair().map(entry =>
                    <button key={entry}>
                        <h1>{entry}</h1>
                    </button>
                )}
            </div>
        );
    }
}

export default Voting;
