import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border: 1px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  background-color: #000;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  transition: .25s ease-out;
  &:hover {
    z-index: 1;
    cursor: pointer;
  }
`;

const Marker = props => (
  <Wrapper
    alt={props.text}
    key={props.VehicleID}
    className="vehicle"
    {...props.onClick ? { onClick: props.onClick } : {}}
  > 
    <div className="vehicle-infobox">
      <div>{props.data.TripHeadsign}</div>
    </div>
  </Wrapper>
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
