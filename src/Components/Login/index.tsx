import styled from "styled-components";
import {
  SignUpContainer,
  SignUpSubContainer,
  HeaderContainer,
  IconContianer,
  SignUpHeading,
  FieldsContainer,
  InputField,
  InputFieldContainerWrapper,
  EyeIconContainer,
  GenderIconContainer,
  GenderContainer,
  ParaElement,
  GenderHeadingContainer,
  GenderContents,
  GenderButton,
  SignUpButton,
  HidePassword,
  AlreadyHaveAnAccout,
  LoginLink,
} from "./loginstyled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ChangeEvents from "../../Constants/changeEvents";
import { motion } from "framer-motion";

const dropdownVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isPassword, setIsPassword] = useState(true);
  const [error, setError] = useState<String | undefined>(undefined);

  const { changePassword } = ChangeEvents();

  const handleBack = () => {
    navigate(-1);
  };

  const submitForm = () => {
    if (email === "" || password === "") {
      setError("Please fill all the fields");
    } else {
      navigate("/home");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {/* initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: -300 }} transition={{ duration: 0.2 }} */}
      <SignUpContainer>
        <SignUpSubContainer>
          <HeaderContainer>
            <IconContianer onClick={handleBack} size={40} />
            <SignUpHeading>Login</SignUpHeading>
          </HeaderContainer>
          <FieldsContainer
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <InputField
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputFieldContainerWrapper>
              <InputField
                placeholder="Password"
                type={isPassword ? "password" : "text"}
                onChange={(e) => setPassword(changePassword(e))}
                value={password}
              />
              {isPassword ? (
                <EyeIconContainer
                  onClick={() => setIsPassword(false)}
                  size={24}
                />
              ) : (
                <HidePassword onClick={() => setIsPassword(true)} size={24} />
              )}
            </InputFieldContainerWrapper>
            {error && <p>{error}</p>}
            <SignUpButton type="submit" onClick={submitForm}>
              Login
            </SignUpButton>
            <AlreadyHaveAnAccout>
              Don’t have an account yet?{" "}
              <LoginLink to="/Signup">Sign Up</LoginLink>
            </AlreadyHaveAnAccout>
          </FieldsContainer>
        </SignUpSubContainer>
      </SignUpContainer>
    </AnimatePresence>
  );
};

export default Login;
