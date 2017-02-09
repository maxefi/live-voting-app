import React, {Component} from 'react';
import Winner from '../Winner';
import Vote from '../Vote';

export default class Voting extends Component {
    render() {
        const {winner} = this.props;

        return (
            <div>
                {winner
                    ? <Winner ref="winner" winner={winner}/>
                    : <Vote {...this.props}></Vote>
                }
            </div>
        );
    }
};
