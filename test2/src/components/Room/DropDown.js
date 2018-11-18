import React from 'react';
import { DropDownWrapper } from './Style';

export const DropDown = ({ammount, checked, roomNumber, type, onChange}) => {
    let details = {
        title: '',
        ageRange: '',
        ammountRange: []
    };

    if ( type === 'adults' ) {
        details = {
            ...details,
            title: 'Adults',
            ageRange: '(18+)',
            ammountRange: [1,2]
        }
    } else if (type === 'children') {
        details = {
            ...details,
            title: 'Children',
            ageRange: '(0-17)',
            ammountRange: [0,1,2]
        }
    }

    const { title, ageRange, ammountRange } = details;

    return (
        <DropDownWrapper>
            <label>{title}<br/>{ageRange}</label>
            <select 
            id="amount-select" 
            value={ammount}
            disabled={!checked}
            onChange={(e) => onChange(`room${roomNumber}`, e.target.value)}
            >
                {
                    ammountRange.map((num, index) => {
                        return (<option value={num} key={index}>{num}</option>);
                    })
                }
            </select>
        </DropDownWrapper>
    );
}

export default DropDown;
