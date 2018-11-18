import React, { Component } from 'react';
import { connect } from 'react-redux';

import DropDown from './DropDown';
import { RoomContainer, DropDownContainer } from './Style';
import { updateCheck, updateAdult, updateChildren, checkPrevious, unCheckLater } from '../../actions';

export class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  roomChecked = (roomNumber, checked) => {
    this.props.updateCheck(`room${roomNumber}`);

    // If Room 3 or 4 is checked to true it makes sure the Rooms before it are checked to true
    if (!checked) {
      if (roomNumber > 2) {
        for (let i = roomNumber - 1; i > 1; i--) {
          this.props.checkPrevious(`room${i}`)
        }
      }
    }

    // If Room 2 or 3 is checked to false it makes sure the Rooms after it are checked to false
    if (checked) {
      if (roomNumber > 1 && roomNumber < 4) {
        for (let i = roomNumber + 1; i < 5; i++) {
          this.props.unCheckLater(`room${i}`)
        }
      }
    }
  }
  
  render() {
    const { roomNumber } = this.props || '';
    const room = this.props[`room${roomNumber}`] || {};
    const { adults, children } = room || '';
    const checked = room.checked || roomNumber === 1 ? true : false;

    return (
        <RoomContainer roomNumber={roomNumber}>
          <label className="checkbox">
            <input
              className="checkbox-input"
              type="checkbox" 
              name="room" 
              checked={checked}
              onChange={() => this.roomChecked(roomNumber, checked)}
              disabled={`room${roomNumber}` === 'room1'}
            />
            <span>{`Room ${roomNumber}`}</span>
          </label>
          <DropDownContainer checked={checked}>
            <DropDown 
              ammount={adults || 1}
              checked={checked}
              roomNumber={roomNumber}
              type={'adults'}
              onChange={this.props.updateAdult}
            />
            <DropDown 
              ammount={children || 0}
              checked={checked}
              roomNumber={roomNumber}
              type={'children'}
              onChange={this.props.updateChildren}
            />
          </DropDownContainer>
        </RoomContainer>
      );
  }
}

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps, { updateCheck, updateAdult, updateChildren, checkPrevious, unCheckLater })(Room);
