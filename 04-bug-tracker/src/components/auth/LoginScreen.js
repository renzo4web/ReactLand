import React from "react";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      <h1>Login</h1>

      <form>
        <div className="ui__input-group">
          <label htmlFor="email">Email</label>
          <input name="email" id="email" type="text" />
        </div>

        <div className="ui__input-group">
          <label htmlFor="password">Password</label>
          <input name="pasword" id="password" type="password" />
        </div>

        <button className="auth__btn">Enter</button>

        <hr />

        <div>
          <p>Login with social networks</p>

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

        <Link to="/auth/register">Create new account</Link>
      </form>
    </>
  );
};

export default LoginScreen;
