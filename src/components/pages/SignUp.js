import React, { useState } from 'react';

import Modal from '../Modal.js';
import Overlay from '../Overlay.js';

const SignUp = props => {
  const [checked, setChecked] = useState(true);

  const renderContent = () => {
    return (
      <form action="/" className="form">
        <div className="form__group">
          <input
            type="email"
            className="form__input"
            id="email"
            placeholder=" "
            autoComplete="off"
            required
          />
          <label
            htmlFor="email"
            className="form__label form__label--untouchable"
          >
            Email address
          </label>
        </div>
        <div className="form__group form__group--col-1-of-2">
          <input
            type="password"
            className="form__input"
            id="password"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="form__label form__label--untouchable"
          >
            Password
          </label>
        </div>
        <div className="form__group form__group--col-1-of-2">
          <input
            type="password"
            className="form__input"
            id="confirm"
            placeholder=" "
            required
          />
          <label
            htmlFor="confirm"
            className="form__label form__label--untouchable"
          >
            Confirm
          </label>
        </div>
        <div className="form__group">
          <input
            type="checkbox"
            className="form__checkbox"
            id="subscribed"
            value="subscribed"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label
            htmlFor="subscribed"
            className="form__label form__label--checkbox"
          >
            <span className="form__myCheckbox"></span>
            Subscribe to our newsletter
          </label>
        </div>
        <div className="form__group">
          <button className="btn btn--green">
            Next step <span className="rarr">&rarr;</span>
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <div className="sign-up"></div>
      <Modal
        title="Create your account"
        content={renderContent()}
        onDismiss={() => props.history.push(props.location.state)}
      />

      <Overlay onDismiss={() => props.history.push(props.location.state)} />
    </>
  );
};

export default SignUp;
