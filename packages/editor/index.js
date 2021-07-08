/* eslint-disable react/prop-types */
import React from 'react';

export const Button = props => (
  <button onClick={props.onClick} {...props}>
    {props.children}
  </button>
);