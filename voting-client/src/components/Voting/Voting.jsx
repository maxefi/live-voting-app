import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Winner from '../Winner';
import Vote from '../Vote';

export class Voting extends PureComponent {
    render() {
        const {winner} = this.props;

        return (
            <div>
                {winner
                    ? <Winner ref="winner" winner={winner}/>
                    : <Vote {...this.props}/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        winner: state.get('winner')
    };
}

export const VotingContainer = connect(mapStateToProps)(Voting);
