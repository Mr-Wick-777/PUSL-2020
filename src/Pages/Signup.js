import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

function Signup() {
  return (
    <SignupContainer>
      <Signupinnercontainer>
        <h1>signup form </h1>

        <Loginform>
          <form>
            <Username>
              <AccountCircleIcon /> <span>Username </span>
              <input type="email" placeholder="Email" />
            </Username>
            <Uname>
              <PersonIcon /> <span>Name </span>
              <input type="text" placeholder="Name" />
            </Uname>
            <Userpassword>
              <LockIcon /> <span>Password </span>
              <input type="password" placeholder="Password" />
            </Userpassword>
            <Cpassword>
              <LockIcon /> <span> Conform Password </span>
              <input type="password" placeholder="conform password" />
            </Cpassword>
            <button type="submit">signup</button>

            <div>
              already have acount? <Link to="/Login">Login</Link>
            </div>
          </form>
        </Loginform>
      </Signupinnercontainer>
    </SignupContainer>
  );
}

export default Signup;

const SignupContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const Signupinnercontainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12) 0 1px 2px rgba(0, 0, 0, 0.25);
`;

const Username = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  > span {
    margin-right: 10px;
    margin-bottom: 5px;
  }
  > input {
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
    margin-left: 50px;
  }
`;
const Uname = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  > span {
    margin-right: 10px;
    margin-bottom: 5px;
  }
  > input {
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
    margin-left: 80px;
  }
`;
const Userpassword = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  > span {
    margin-right: 10px;
    margin-bottom: 5px;
  }
  > input {
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
    margin-left: 60px;
  }
`;
const Cpassword = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  > span {
    margin-right: 10px;
    margin-bottom: 5px;
  }
  > input {
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
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
      margin-bottom: 10px;
    }
  }
`;
