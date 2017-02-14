import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Winner from '../Winner';
import Tally from '../Tally';

export class Results extends PureComponent {
    render() {
        const {pair, tally, next, winner} = this.props;

        return (
            <div className="results">
                {winner
                    ? <Winner ref="winner" winner={winner}/>
                    : <div className="results__info">
                         <Tally ref="tally" pair={pair} tally={tally}/>
                         <div className="management">
                             <button ref="next" className="next" onClick={next}>Next</button>
                         </div>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        tally: state.getIn(['vote', 'tally']),
        winner: state.get('winner')
    }
}

export const ResultsContainer = connect(mapStateToProps)(Results);
