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
  GenderButton, SignUpButton
} from "./signupstyled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";

const SignUp = () => {
  const navigate = useNavigate();
  const [genderContents, setGenderContents] = useState(false);
  const [roleContents, setRoleContents] = useState(false);
  const [spendingContents, setSpendingContents] = useState(false);


  const openGenderDropDown = () => {
    setGenderContents(!genderContents);
  };

  const openRolesDropDown = ()=>{
    setRoleContents(!roleContents)
  }

  const handleBack = () => {
    navigate("/");
  };

  const openSpendingDropDown = ()=>{
    setSpendingContents(!spendingContents)
  }


  return (
    <AnimatePresence mode="wait">
        <SignUpContainer initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: -300 }} transition={{ duration: 0.2 }}>
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
                <GenderHeadingContainer onClick={openGenderDropDown}>
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
            <GenderContainer>
                <GenderHeadingContainer onClick={openRolesDropDown}>
                <ParaElement>Role</ParaElement>
                <GenderIconContainer size={24} />
                </GenderHeadingContainer>
                {roleContents && (
                <GenderContents>
                    <GenderButton>Employee</GenderButton>
                    <GenderButton>Student</GenderButton>
                </GenderContents>
                )}
            </GenderContainer>
            <GenderContainer>
                <GenderHeadingContainer onClick={openSpendingDropDown}>
                <ParaElement>Select your spending pattern</ParaElement>
                <GenderIconContainer size={24} />
                </GenderHeadingContainer>
                {spendingContents && (
                <GenderContents>
                    <GenderButton>High Spender</GenderButton>
                    <GenderButton>Average Spender</GenderButton>
                    <GenderButton>Low Spender</GenderButton>
                </GenderContents>
                )}
            </GenderContainer>
            <SignUpButton>Sign Up</SignUpButton>
            </FieldsContainer>
        </SignUpSubContainer>
        </SignUpContainer>
    </AnimatePresence>
  );
};

export default SignUp;
