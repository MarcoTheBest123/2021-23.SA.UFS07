import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeholder, onData, type }) => {
  return (
    <input
      onData={onData}
      type={type}
      placeholder={placeholder}
    >
      
    </input>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onData: PropTypes.func,
  isValid: PropTypes.bool.isRequired,
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  onData: undefined,
};
