import React, {Component} from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

// This component does nothing except render its child components, expected to be given in as the children prop. This is
// something that the react-router package does for us. It plugs in the component(s) defined for whatever the current
// route happens to be. Since we currently just have the one route for Voting, at the moment this component always
// renders Voting.

// Notice that we've moved the placeholder pair data from index.jsx to App.jsx. We use React's cloneElement API to
// create a clone of the original components with our custom pair prop attached. This is just a temporary measure, and
// we'll be able to remove the cloning call later.

// Earlier we discussed how it's generally a good idea to use the pure render mixin across all components. The App
// component is an exception to this rule. The reason is that it would cause route changes not to fire, because of an
// implementation issue between the router and React itself. This situation may well change in the near future.
export default class App extends Component {
    render() {
        const {children} = this.props;

        return React.cloneElement(children, {pair: pair, tally: tally});
    }
};
