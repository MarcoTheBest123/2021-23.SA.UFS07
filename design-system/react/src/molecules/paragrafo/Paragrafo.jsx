import React from 'react';
import PropTypes from 'prop-types';

export const Paragrafo = ({ label }) => {
    return(
        <p>{label}</p>
    )
}

Paragrafo.propTypes = {

    label: PropTypes.string.isRequired,
};

Paragrafo.defaultProps = {

};