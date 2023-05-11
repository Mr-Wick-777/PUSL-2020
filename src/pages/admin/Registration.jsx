import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import './Registration.css'
import CleanCityLogo from "../../assets/CleanCityLogo.png";

function InternalRegister() {
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (event) => {
    setSelectedButton(event.target.value);
  };

  const isCaptainSelected = selectedButton === "captain";
  const isWorkerSelected = selectedButton === "worker";

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected button: ", selectedButton);
  };

  return (
    <div className="reg-container">
      <div className="register-inner-container">
      <div className="auth-header-logo">
          <img src={CleanCityLogo} alt="" className="auth-header-logo-img" />
        </div>
        <h1>Clean City Employees</h1>

        <div className="register-form">
          <form onSubmit={handleSubmit}>
            <div className="form-content">
            <div className="position">
              <button
                className={isCaptainSelected ? "selected" : ""}
                type="button"
                value="captain"
                onClick={handleButtonClick}
              >
                Captain
              </button>
              <button
                className={isWorkerSelected ? "selected" : ""}
                type="button"
                value="worker"
                onClick={handleButtonClick}
              >
                Collection Staff Member
              </button>
            </div>
            <div className="input-field">
              <label htmlFor="full-name" className="input-label">
                Full Name
              </label>
              <input
                type="text"
                className="input-control"
                id="full-name"
                placeholder="Name"
                autoComplete="off"
                required
              />
            </div>
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
            
            <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InternalRegister;
