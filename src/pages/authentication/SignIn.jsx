import React from "react";
import { Link } from "react-router-dom";
import CleanCityLogo from "../../assets/CleanCityLogo.png";
import "./Auth.css";

const SignIn = () => {
  return (
    <div className="auth-content">
        <div className="auth-wrapper">

        
      <div className="auth-header">
        <div className="auth-header-logo">
          <img src={CleanCityLogo} alt="" className="auth-header-logo-img" />
        </div>
        <h1 className="auth-header-title">Green Task Force</h1>
        <p className="auth-header-subtitle">
          Let's contribute for a city that is cleaner than yesterday
        </p>
        
      </div>
      <div className="auth-body">
        <form className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              Email address
            </label>
            <input
              type="text"
              className="input-control"
              id="email"
              placeholder="example@gmail.com"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-control"
              placeholder="Password"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex-end">
            <Link to="/password-reset" className="link-end">
              Forgot password?
            </Link>
          </div>
          <button type="submit" className="btn-submit">
            Sign in
          </button>
        </form>
        <p className="text-center">
          New on our platform?{" "}
          <Link to="/gtfsignup" className="link-text-center">
            Create account here
          </Link>
        </p>
      </div></div></div>
    
  );
};

export default SignIn;
