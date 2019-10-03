import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border: 1px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
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
    key={props.vehicleID}
    className={props.type + " " + props.type + props.data.routeNumber + " vehicle"}
    {...props.onClick ? { onClick: props.onClick } : {}}
  >
    <div className="routeNumber">{props.data.routeNumber}</div>
    <div className="vehicle-infobox">
      <div>{props.data.signMessageLong}</div>
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
