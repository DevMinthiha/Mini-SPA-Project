import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useLoginContext } from "../context/LoginContext";
import { Button, Container } from "../styles/Styles";
import Navbar from "./Navbar";

const Login = () => {
    const {loggedIn, setLoggedIn} = useLoginContext();
    const phoneRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const login = e => {
        e.preventDefault();
        const user = {
            phone: phoneRef.current.value,
            password: passwordRef.current.value
        }
        phoneRef.current.value = "";
        passwordRef.current.value = "";
        setLoggedIn(true);
        navigate("/home");
    }


  return (
    <Container>
      <Navbar />
      <Form onSubmit={login}>
        <h2
          style={{
            textAlign: "center",
          }}
        >
          Login Form
        </h2>
        <InputTag type="text" placeholder="phone number" ref={phoneRef} />
        <InputTag type="password" placeholder="password" ref={passwordRef} />
        <Button style={{ margin: 0 }} type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

const InputTag = styled.input`
  border: none;
  padding: 10px 15px;
  width: 300px;
  border-radius: 10px;

  &:focus {
    outline: 1px solid #ddd;
  }
`;

const Form = styled.form`
  margin: auto;
  background-color: #dde;
  width: 400px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  border-radius: 10px;
  margin-top: 50px;

  h2 {
      color: ${ props => props.theme.colors.primary }
  }
`;
