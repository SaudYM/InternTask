import React from "react";

export const SignIn = () => {
  return (
    <>
      <div className="login-card">
        <img src="Logo.svg" alt="" />
        <div className="text">
          <p className="SubSign1">SIGN IN</p>
          <p className="SubSign2">
            Enter your credentials to access your account
          </p>
        </div>

        <div className="logInForm">
          <form>
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
            />

            <button className="SignInBut">SIGN IN</button>
            <p className="FootOfloogin">
              Forgot your password? <span>Reset Password</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
