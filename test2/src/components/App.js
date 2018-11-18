import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setSavedState } from '../actions';
import Room from './Room/Room';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const roomState = localStorage.getItem('roomState');
    if (roomState === null) {
      return;
    }
    this.props.setSavedState(JSON.parse(roomState))
  }

  save = (e) => {
    e.preventDefault();
    localStorage.setItem('roomState', JSON.stringify(this.props.state));
  }

  render() {
    return (
      <Container onSubmit={e => this.save(e)}>
        <Room roomNumber={1}/>
        <Room roomNumber={2}/>
        <Room roomNumber={3}/>
        <Room roomNumber={4}/>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Container>
    );
  }
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps, { setSavedState })(App);

const Container = styled.form`
  height: 300px;
  width: 800px;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

export const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  position: absolute;
  left: 40px;
  bottom: 20px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer; 
`;
