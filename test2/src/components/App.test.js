import React from 'react';
import { shallow } from 'enzyme';

import { App, SubmitButton } from './App';
import { Room } from './Room/Room'

describe('App component', () => {
    it('shallow renders without crashing', () => {
        shallow(<App />);
    })
    it('has 5 children components', () => {
        const app = shallow(<App/>);
        const components = app.children();

        expect(components.length).toEqual(5);
    });
    it('renders submit button', () => {
        const app = shallow(<App/>);
        const button = app.find(SubmitButton);

        expect(button.length).toEqual(1);
    });
})
