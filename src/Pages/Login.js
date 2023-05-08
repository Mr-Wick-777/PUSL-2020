import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login({ onButtonClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedButton, setSelectedButton] = useState("member");
  const Navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (selectedButton === "member") {
      Navigate("/member");
    } else {
      Navigate("/captain");
    }
  };

  const handleButtonSelect = (button) => {
    setSelectedButton(button);
    onButtonClick(button);
  };

  return (
    <LoginContainer>
      <Logininnercontainer>
        <h1>welcome!</h1>
        <ButtonContainer>
          <Button
            isSelected={selectedButton === "member"}
            onClick={() => handleButtonSelect("member")}
          >
            Member
          </Button>
          <Button
            isSelected={selectedButton === "captain"}
            onClick={() => handleButtonSelect("captain")}
          >
            Captain
          </Button>
        </ButtonContainer>
        <Loginform>
          <form onSubmit={handleLogin}>
            <Username>
              <AccountCircleIcon /> <span>Username </span>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Username>
            <Userpassword>
              <LockIcon /> <span>Password </span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Userpassword>
            <button type="submit">Log In</button>
            {selectedButton !== "captain" && (
              <div>
                New member? <Link to="/Signup">Signup</Link>
              </div>
            )}
          </form>
        </Loginform>
      </Logininnercontainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Logininnercontainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12) 0 1px 2px rgba(0, 0, 0, 0.25);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-bottom: 15px;
  margin-left: 20px;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.isSelected ? "#48D1CC" : "transparent"};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`;

const Username = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  > span {
    margin-right: 10px;
    margin-bottom: 12px;
  }
`;

const Userpassword = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  > span {
    margin-right: 10px;
    margin-bottom: 12px;
  }
`;

const Loginform = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin-bottom: 10px;
    }

    button {
      margin-top: 10px;
    }
  }
`;
