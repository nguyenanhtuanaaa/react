import React from 'react';

const Spinner = ({ message }) => {
  return (
    <div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  );
};

Spinner.defaultProps = {
  message: 'Please accept location request',
};

export default Spinner;
