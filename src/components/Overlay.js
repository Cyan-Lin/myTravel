import React from 'react';
import ReactDOM from 'react-dom';

const Overlay = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="overlay"></div>,
    document.querySelector('#overlay')
  );
};

export default Overlay;
