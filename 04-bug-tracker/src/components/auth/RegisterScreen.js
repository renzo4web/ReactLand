import React from "react";
import { Link } from "react-router-dom";

const RegisterScreen = () => {
  return (
    <>
      <h1>Register</h1>

      <form>
        <div className="ui__input-group">
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" />
        </div>

        <div className="ui__input-group">
          <label htmlFor="email">Email</label>
          <input name="email" id="email" type="text" />
        </div>

        <div className="ui__input-group">
          <label htmlFor="password">Password</label>
          <input name="pasword" id="password" type="password" />
        </div>

        <div className="ui__input-group">
          <label htmlFor="password2">Confirm password</label>
          <input name="pasword2" id="password2" type="password" />
        </div>
        <button className="ui__button">Enter</button>

        <hr />

        <div>
          <p>Register with social networks</p>

          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link className="link" to="/auth/login">
          Already register ?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
