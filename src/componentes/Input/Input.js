import React from 'react';
import './Input.css';

function Input({ placeholder, onChange }) {
  return (
    <input
      className="botao"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;