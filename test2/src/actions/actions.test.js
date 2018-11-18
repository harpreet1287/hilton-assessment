import * as actions from './index'
import {
    UPDATE_CHECKED,
    UPDATE_ADULTS,
    UPDATE_CHILDREN,
    CHECK_PREVIOUS,
    UNCHECK_LATER,
    SET_SAVED_STATE
} from './actionTypes';

describe('app action creators', () => {

  it('should create a action that UPDATE_CHECKED', () => {
      const room = '';
      const expectedAction = {
        type: UPDATE_CHECKED,
        payload: {room}
      }
    expect(actions.updateCheck(room)).toEqual(expectedAction);
  })

  it('should create a action that UPDATE_ADULTS', () => {
      const room = '';
      const value = '';
      const expectedAction = {
        type: UPDATE_ADULTS,
        payload: {room, value}
      }
    expect(actions.updateAdult(room, value)).toEqual(expectedAction);
  })
  it('should create a action that UPDATE_CHILDREN', () => {
      const room = '';
      const value = '';
      const expectedAction = {
        type: UPDATE_CHILDREN,
        payload: {room, value}
      }
    expect(actions.updateChildren(room, value)).toEqual(expectedAction);
  })
  it('should create a action that CHECK_PREVIOUS', () => {
      const room = '';
      const expectedAction = {
        type: CHECK_PREVIOUS,
        payload: {room}
      }
    expect(actions.checkPrevious(room)).toEqual(expectedAction);
  })
  it('should create a action that UNCHECK_LATER', () => {
      const room = '';
      const expectedAction = {
        type: UNCHECK_LATER,
        payload: {room}
      }
    expect(actions.unCheckLater(room)).toEqual(expectedAction);
  
  })
  it('should create a action that SET_SAVED_STATE', () => {
      const savedState = {};
      const expectedAction = {
        type: SET_SAVED_STATE,
        payload: savedState
      }
    expect(actions.setSavedState(savedState)).toEqual(expectedAction);
  
  })
})