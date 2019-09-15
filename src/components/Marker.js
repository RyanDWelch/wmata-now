import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 28px;
  height: 28px;
  border: 2px solid #fff;
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
    height: 48px;
    width: 48px;
  }
`;

const Marker = props => (
  <Wrapper
    alt={props.text}
    className={props.type + " vehicle"}
    {...props.onClick ? { onClick: props.onClick } : {}}
  >
    <div className="vehicle-infobox">
      {Object.keys(props.data).map(function(keyName) {
        return <div className={`vehicle-${keyName}`}><div>{`${keyName}: `}</div>{` ${props.data[keyName]}`}</div>;
      })}
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