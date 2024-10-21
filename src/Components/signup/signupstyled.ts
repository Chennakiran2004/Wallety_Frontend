import styled, {keyframes} from "styled-components";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";
import { FaRegEyeSlash } from "react-icons/fa";

export const slideIn = keyframes`
  0% {
    transform: translateX(100vw);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const SignUpContainer = styled.div`
  padding-bottom: 40px;
  
  animation: ${slideIn} 0.35s;
`;

export const SignUpSubContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`;

export const HeaderContainer = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
`;

export const IconContianer = styled(IoIosArrowRoundBack)`
  position: fixed;
`;

export const SignUpHeading = styled.h1`
  font-size: 24px;
  text-align: center;
  width: 100%;
`;

export const FieldsContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 56px;
  gap: 24px;
`;

export const InputField = styled.input`
  width: 90%;
  margin: auto;
  border: 1px solid #f1f1fa;
  height: 48px;
  border-radius: 16px;
  padding-left: 12px;
  font-size: 16px;

  ::placeholder {
    color: black;
  }
`;

export const InputFieldContainerWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const EyeIconContainer = styled(IoEyeOutline)`
  position: fixed;
  right: 30px;
  color: #91919f;
`;
interface GenderIconContainerProps {
  isactive: boolean;
}

export const GenderIconContainer = styled(
  IoIosArrowDown
)<GenderIconContainerProps>`
  opacity: 0.6;
  position: fixed;
  right: 30px;
  color: black;
  transition: transform 0.3s ease;
  transform: ${({ isactive }) =>
    isactive ? "rotate(180deg)" : "rotate(0deg)"};
`;

export const GenderContainer = styled.div`
  width: 90%;
  padding-top: 16px;
  padding-bottom: 16px;
  margin: auto;
  border: 1px solid #f1f1fa;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
`;

export const ParaElement = styled.p`
  font-size: 16px;
  color: #91919f;
`;

export const GenderHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export const GenderContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const GenderButton = styled.button`
  width: 95%;
  background: none;
  border: none;
  text-align: left;
  font-size: 16px;
  color: #91919f;
  border: 1px solid #afafaf;
  margin: auto;
  padding: 14px;
  border-radius: 8px;
  color: black;
`;

export const SignUpButton = styled(GlobalButton1)`
  width: 90%;
  margin: auto;
`;

export const HidePassword = styled(FaRegEyeSlash)`
  position: fixed;
  right: 30px;
  color: #91919f;
`;

export const AlreadyHaveAnAccout = styled.p`
  text-align: center;
  color: #91919f;
`;

export const LoginLink = styled(Link)`
  color: #7f3dff;
  text-decoration: none;
`;
