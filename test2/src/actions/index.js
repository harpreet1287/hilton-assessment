import {
    UPDATE_CHECKED,
    UPDATE_ADULTS,
    UPDATE_CHILDREN,
    CHECK_PREVIOUS,
    UNCHECK_LATER,
    SET_SAVED_STATE,
} from '../actions/actionTypes'


export const updateCheck = (room) => {
    return { 
        type: UPDATE_CHECKED,
        payload: {room}
    }
}

export const updateAdult = (room, value) => {
    return { 
        type: UPDATE_ADULTS,
        payload: {room, value}
    }
}

export const updateChildren = (room, value) => {
    return { 
        type: UPDATE_CHILDREN,
        payload: {room, value}
    }
}

export const checkPrevious = (room) => {
    return {
        type: CHECK_PREVIOUS,
        payload: {room}
    }
}

export const unCheckLater = (room) => {
    return {
        type: UNCHECK_LATER,
        payload: {room}
    }
}

export const setSavedState = (savedState) => {
    return {
        type: SET_SAVED_STATE,
        payload: savedState
    }
}
