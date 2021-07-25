import React from "react";

const LoginScreen = () => {
  return (
    <div>
      <h1>Login</h1>
      <form action>
        <label htmlFor="name">
          Name
          <input type="text" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" />
        </label>
      </form>
    </div>
  );
};

export default LoginScreen;
