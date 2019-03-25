import * as React from 'react';
import * as renderer from 'react-test-renderer';

import About from '../src/scripts/pages/About';
import Home from '../src/scripts/pages/Home';

test('About', () => {
    const tree = renderer
        .create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Home', () => {
    const tree = renderer
        .create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
});
