import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 10%;
  background-color: #fff;
`;

const Stats = props => (
  <Wrapper
    className={"stats"}
  >
    <div><div>Total Vehicles</div> {props.data.length}</div>
    <div><div onMouseEnter={()=>console.log('something')}>Trains</div>{props.data.filter(i => i.type === 'rail').length}</div>
    <div><div>Busses</div>{props.data.filter(i => i.type === 'bus').length}</div>
    <div><div>Delayed</div>{props.data.filter(i => i.delay > 0).length}</div>
    <div><div>Ahead of Schedule</div>{props.data.filter(i => i.delay < 0).length}</div>
    <div><div>On Schedule</div>{props.data.filter(i => i.delay === 0).length}</div>
    <div><div>In Congestion</div>{props.data.filter(i => i.inCongestion === true).length}</div>
  </Wrapper>
);

Stats.defaultProps = {
  onClick: null,
};

Stats.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Stats;