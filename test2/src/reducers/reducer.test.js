import reducer from './index'
import {
    UPDATE_CHECKED,
    UPDATE_ADULTS,
    UPDATE_CHILDREN,
    CHECK_PREVIOUS,
    UNCHECK_LATER,
    SET_SAVED_STATE
} from '../actions/actionTypes';

describe('app reducer', () => {
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

        }
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(defaultState)
  })

  it('should handle UPDATE_CHECKED', () => {
      expect(
        reducer(defaultState, 
        {
            type: UPDATE_CHECKED,
            payload: {room: 'room2'}
        })
      ).toEqual({
          ...defaultState,
          room2: {
            adults: 1,
            children: 0,
            checked: true
          }
      })
  })
  it('should handle UPDATE_ADULTS', () => {
    expect(
        reducer(defaultState, 
        {
            type: UPDATE_ADULTS,
            payload: {room: 'room2', value: 2}
        })
      ).toEqual({
          ...defaultState,
          room2: {
            adults: 2,
            children: 0,
            checked: false
          }
      })
  })
  it('should handle UPDATE_CHILDREN', () => {
      expect(
        reducer(defaultState, 
        {
            type: UPDATE_CHILDREN,
            payload: {room: 'room2', value: 2}
        })
      ).toEqual({
          ...defaultState,
          room2: {
            adults: 1,
            children: 2,
            checked: false
          }
      })
  })
  it('should handle CHECK_PREVIOUS', () => {
      expect(
        reducer(defaultState, 
        {
            type: CHECK_PREVIOUS,
            payload: {room: 'room3'}
        })
      ).toEqual({
          ...defaultState,
          room3: {...defaultState.room3, checked: true},
      })
  })
  it('should handle UNCHECK_LATER', () => {
      expect(
        reducer(defaultState, 
        {
            type: UNCHECK_LATER,
            payload: {room: 'room3'}
        })
      ).toEqual({
          ...defaultState,
          room3: {...defaultState.room3, checked: false},
      })
  })
  it('should handle SET_SAVED_STATE', () => {
    expect(
        reducer(defaultState, 
        {
            type: SET_SAVED_STATE,
            payload: defaultState
        })
      ).toEqual({...defaultState})
  })
})