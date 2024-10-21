import styled from "styled-components";
import { interMedium } from "../../Constants/fontStyles";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";
import { motion } from "framer-motion";
import { slideIn } from "../signup/signupstyled";

export const AccountSetUpContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${slideIn} 0.35s;
`;

export const AccountSubContainer = styled.div`
  width: 90%;
  margin: auto;
  flex-grow: 1;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
`;

export const AccountSetUpHeading = styled.h1`
  ${interMedium}
  font-size: 32px;
  text-align: left;
`;

export const AccountSideHeading = styled.p`
  ${interMedium}
  font-size: 16px;
  text-align: left;
`;

export const AccountSetUpContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LetsGo = styled(GlobalButton1)`
  width: 100%;
  margin-top: auto;
`;
