import {
    UPDATE_CHECKED,
    UPDATE_ADULTS,
    UPDATE_CHILDREN,
    CHECK_PREVIOUS,
    UNCHECK_LATER,
    SET_SAVED_STATE
} from '../actions/actionTypes'


const defaultState = {
    room1: {
        adults: 1,
        children: 0,
        checked: true,
    },
    room2: {
        adults: 1,
        children: 0,
        checked: false,
    },
    room3: {
        adults: 1,
        children: 0,
        checked: false,
    },
    room4: {
        adults: 1,
        children: 0,
        checked: false,
    }

};

export default (state = defaultState, action) => {
    switch (action.type) {
        
        case UPDATE_CHECKED:
            return {
                ...state, 
                [action.payload.room]: {
                    ...state[action.payload.room],
                    checked: !state[action.payload.room].checked,
                    adults: 1,
                    children: 0,

                }
            }

        case UPDATE_ADULTS:
            return {
                ...state, 
                [action.payload.room]: {
                    ...state[action.payload.room],
                    adults: action.payload.value
                }
            }

        case UPDATE_CHILDREN:
            return {
                ...state, 
                [action.payload.room]: {
                    ...state[action.payload.room],
                    children: action.payload.value
                }
            }

        case CHECK_PREVIOUS:
            return {
                ...state, 
                [action.payload.room]: {
                    ...state[action.payload.room],
                    checked: true
                }
            }

        case UNCHECK_LATER:
            return {
                ...state, 
                [action.payload.room]: {
                    ...state[action.payload.room],
                    checked: false,
                    adults: 1,
                    children: 0,
                }
            }
        
        case SET_SAVED_STATE: 
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}