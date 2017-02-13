import React, {PureComponent} from 'react';
import Winner from '../Winner';
import Tally from '../Tally';

export default class Results extends PureComponent {
    render() {
        const {pair, tally, next, winner} = this.props;

        return (
            <div className="results">
                {winner
                    ? <Winner ref="winner" winner={winner}></Winner>
                    : <div className="results__info">
                         <Tally ref="tally" pair={pair} tally={tally}/>
                         <div className="management">
                             <button ref="next" className="next" onClick={next}></button>
                         </div>
                    </div>
                }
            </div>
        );
    }
};
