import React, {Component} from 'react';

export default class Vote extends Component {
    getPair() {
        const {pair} = this.props;

        return pair || [];
    }

    isDisabled() {
        const {hasVoted} = this.props;

        return !!hasVoted;
    }

    hasVotedFor(entry) {
        const {hasVoted} = this.props;

        return hasVoted === entry;
    }

    render() {
        const {vote} = this.props;

        return (
            <div className="voting">
                {this.getPair().map(entry =>
                    <button key={entry} onClick={() => vote(entry)} disabled={this.isDisabled()}>
                        <h1>{entry}</h1>
                        {this.hasVotedFor(entry)
                            ? <div className="label">Voted</div>
                            : null
                        }
                    </button>
                )}
            </div>
        );
    }
};
