import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Room } from './Room';
import { DropDown } from './DropDown';

describe('Room component', () => {
    it('shallow renders without crashing', () => {
        shallow(<Room />);
    })
    it('has two drop down components', () => {
        const room = shallow(<Room />);

        const dropDowns = room.find(DropDown);
        expect(dropDowns.length).toEqual(2);
    })
    it('room number 1 checked default to true', () => {
        const room = shallow(<Room roomNumber={1}/>);

        const input = room.find({type: 'checkbox'});

        expect(input.length).toEqual(1);

        expect(input.props().checked).toEqual(true);
    })
    it('room number not 1 checked default to false', () => {
        const room = shallow(<Room roomNumber={2}/>);

        const input = room.find({type: 'checkbox'});

        expect(input.length).toEqual(1);

        expect(input.props().checked).toEqual(false);
    })
})
