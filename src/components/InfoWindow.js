import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  bottom: 100%;
  border: 2px solid #fff;
  border-radius: 100%;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
    cursor: pointer;
  }
`;

const InfoWindow = props => (
  <Wrapper>
    {Object.keys(props.data).map(function(keyName) {
    return <div className={`vehicle-${keyName}`}>{`${keyName}: ${props.data[keyName]}`}</div>;
    })}
  </Wrapper>
);

InfoWindow.defaultProps = {
  onClick: null,
};

InfoWindow.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default InfoWindow;