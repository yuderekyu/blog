import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  message: PropTypes.string.isRequired,
};

const Error = ({
  message,
}) => <span>{message}</span>;

Error.propTypes = propTypes;
export default Error;
