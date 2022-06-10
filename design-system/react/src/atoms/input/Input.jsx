import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({id, placeholder, onData, isValid, type, label }) => {

    function onInput(InputEvent) {
        {
            console.log("input.onInput", InputEvent);

            if(typeof onData === "function") {
                onData(InputEvent.target.value);
            }
        }
    }

    const message= isValid ? "Valore buono" : "Valore non buono"
  return (
    <>
      <input
        placeholder={placeholder}
        onInput={onInput}
        type={type}
      >
        
      </input>

      {label === undefined ? null : <label htmlFor={id}>{label}</label>}
      {isValid === undefined ? null : message}
    </>
    
  );
};

Input.propTypes = {
  /**
   * Button contents
   */
  placeholder: PropTypes.string,
  /**
   * Optional click handler
   */
  onData: PropTypes.func,

  isValid: PropTypes.bool,

  type: PropTypes.string,

  label: PropTypes.string,

  id: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: "text",
  onData: undefined,
  isValid: undefined,
  placeholder: undefined,
  label: undefined,
};