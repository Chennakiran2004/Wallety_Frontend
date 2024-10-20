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
} from "./signupstyled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [genderContents, setGenderContents] = useState(false);

  const openDropDown = () => {
    setGenderContents(!genderContents);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <SignUpContainer>
      <SignUpSubContainer>
        <HeaderContainer>
          <IconContianer onClick={handleBack} size={40} />
          <SignUpHeading>Sign Up</SignUpHeading>
        </HeaderContainer>
        <FieldsContainer>
          <InputField placeholder="Name" />
          <InputField placeholder="Email" />
          <InputFieldContainerWrapper>
            <InputField placeholder="Password" />
            <EyeIconContainer size={24} />
          </InputFieldContainerWrapper>
          <GenderContainer>
            <GenderHeadingContainer onClick={openDropDown}>
              <ParaElement>Gender</ParaElement>
              <GenderIconContainer size={24} />
            </GenderHeadingContainer>
            {genderContents && (
              <GenderContents>
                <GenderButton>Male</GenderButton>
                <GenderButton>Female</GenderButton>
              </GenderContents>
            )}
          </GenderContainer>
        </FieldsContainer>
      </SignUpSubContainer>
    </SignUpContainer>
  );
};

export default SignUp;
