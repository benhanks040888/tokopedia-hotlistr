import React from 'react';

const Button = ({onClick, children}) =>
  <button
    className="btn"
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
;

export default Button;