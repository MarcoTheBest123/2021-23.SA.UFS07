import React from 'react';
import PropTypes from 'prop-types';

export const Paragrafo = ({ children }) => {
    return(
        <p>{children}</p>
    )
}

Paragrafo.propTypes = {

    label: PropTypes.string.isRequired,
};

Paragrafo.defaultProps = {

};