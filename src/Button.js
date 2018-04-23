import React from 'react';

const Button = ({type, onClick, children}) =>
  <button
    className={`btn ${type ? type : ''}`}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
;

export default Button;