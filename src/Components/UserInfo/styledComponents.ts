import styled from "styled-components";
import { IconContianer } from "../signup/signupstyled";
import { HorizontalLine } from "../Profile/styledComponents";
import { interRegular, interSemiBold } from "../../Constants/fontStyles";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";

import { slideIn } from "../signup/signupstyled";

export const ProfileInfoMainContainer = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  margin-top: 24px;

  animation: ${slideIn} 0.35s;
`;

export const PrfileInfoHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 16px;
`;

export const BackImage = styled(IconContianer)`
  left: 12px;
`;

export const FormContainer = styled.form`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 16px;
  margin-top: 24px;
`;

export const InputLabel = styled.label`
  ${interRegular}
  color: var(--D-1, #122539);
  font-size: 14px;
  line-height: normal;
`;

export const InputElement = styled.input`
  ${interRegular}
  display: flex;
  width: 90%;
  height: 50px;
  padding: 0px 16px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid var(--Colors-Purple, #af52de);
  background: #fbfeff;
  color: var(--Colors-Purple, var(--Colors-Purple, #af52de));
  font-size: 14px;
  line-height: normal;
  outline: none;
`;

export const HorizontalLine1 = styled(HorizontalLine)`
  margin-top: 24px;
`;

export const SignAndLoginHeading = styled.h3`
  ${interSemiBold}
  color: var(--Main-Color, #010f07);
  text-align: center;
  font-feature-settings: "liga" off, "clig" off;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1px;
`;

export const SignAndLoginInHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-top: 8%;
`;

export const Button = styled(GlobalButton1)`
  margin-top: 16%;
`;