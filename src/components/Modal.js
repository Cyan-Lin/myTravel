import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="modal">
      <button onClick={props.onDismiss} className="close-modal">
        &times;
      </button>

      <div className="heading-tertiary">{props.title}</div>

      <>{props.content}</>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
