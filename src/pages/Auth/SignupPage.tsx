import React from "react";
import "./Styles/style.css";
function SignupPage() {
  return (
    <div className="app__singnup">
      <div className="header">HB GROUP</div>

      <div className="singnup__content">
        <div className="singup__form">
          <div className="form__group">
            <label htmlFor="Phone Number">Phone Number</label>
            <input
              type="text"
              className=""
              placeholder="Please type your phone number"
            />
          </div>

          <div className="form__group">
            <label htmlFor="photo code">photo code</label>
            <input
              type="text"
              className=""
              placeholder="Please type your phone number"
            />
          </div>

          <div className="form__group">
            <label htmlFor="Password">Password</label>
            <input
              type="text"
              className=""
              placeholder="Please type your phone number"
            />
          </div>

          <div className="form__group">
            <label htmlFor="Confirm Password">Confirm Password</label>
            <input
              type="text"
              className=""
              placeholder="Please type your phone number"
            />
          </div>

          <div className="form__group">
            <label htmlFor="Invitation Code">Invitation Code</label>
            <input
              type="number"
              className=""
              placeholder="Please type your phone number"
            />
          </div>
        </div>
      </div>

      <div className="singup__footer">

        <button> Confirmer</button>
      </div>
    </div>
  );
}

export default SignupPage;
