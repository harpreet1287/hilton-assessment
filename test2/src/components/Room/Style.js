import styled, { css } from 'styled-components';

export const RoomContainer = styled.section`
    width: 220px;
    height: 150px;
    border: 2px solid grey;
    border-radius: 12px;
    margin: 5px;
    background-color: lightgrey;
    padding: 0px 10px;
    .checkbox {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
            margin-left: 10px;
        }
    }
    ${props => props.roomNumber === 1 && css`
        .checkbox-input {
            display: none;
        }
    `};
`;

export const DropDownContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: lightgrey;
    padding: 10px 0px;
    ${props => props.checked && css`
        background-color: white;
    `};
`;

export const DropDownWrapper = styled.div`
    width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    label {
        line-height: 24px;
    }
    select {
        margin-top: 10px;
    }
`;

