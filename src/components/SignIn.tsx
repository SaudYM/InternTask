import { NavLink } from "react-router-dom";
export const SignIn = () => {
  return (
    <>
      <div className="SignInContianer">
        <div className="login-card">
          <img src="Logo.svg" alt="logo" />

          <div className="text">
            <p className="SubSign1">SIGN IN</p>
            <p className="SubSign2">
              Enter your credentials to access your account
            </p>
          </div>

          <div className="logInForm">
            <form className="formLogIn">
              <label className="LogInFomrLabel">Email</label>
              <input
                className="InpunLogIn"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <label className="LogInFomrLabel">Password</label>
              <input
                className="InpunLogIn"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <NavLink to="/DashBoard">
                <button className="SignInBut">SIGN IN</button>
              </NavLink>
              <p className="FootOfloogin">
                Forgot your password? <span>Reset Password</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
