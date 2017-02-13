import React, {PureComponent} from 'react';

export default class Tally extends PureComponent {
    getPair() {
        const {pair} = this.props;

        return pair || [];
    }

    getVotes(entry) {
        const {tally} = this.props;

        if (tally && tally.has(entry)) {
            return tally.get(entry);
        }
        return 0;
    }

    render() {
        return (
            <div className="tally">
                {this.getPair().map(entry =>
                    <div key={entry} className='entry'>
                        <h1>{entry}</h1>
                        <div>{this.getVotes(entry)}</div>
                    </div>
                )}
            </div>
        );
    }
}
