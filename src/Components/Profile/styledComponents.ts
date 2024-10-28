import styled from "styled-components";
import {
  interBold,
  interMedium,
  interSemiBold,
} from "../../Constants/fontStyles";
import { PopUpSubContainer } from "../Transaction/styledComponents";
import { slideOut } from "../signup/signupstyled";

export const ProfileMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 91dvh;
  /* background-color: #f6f6f6; */
  align-items: center;
  animation: ${slideOut} 0.35s;

  @media screen and (min-width: 768px) {
    width: 768px;
    margin: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow here */
    border-radius: 16px;
    height: 72vh;
  }
`;

export const ProfileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 8%;
  align-items: center;
`;

export const ProfileHeadingContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  gap: 24px;
  width: 100%;
`;

export const ProfileHeadingIcon = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background: var(--Violet-Violet-100, #7f3dff);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileHeadingIconSymbol = styled.p`
  ${interBold}
  color: var(--Base-Light-Light-80, #fcfcfc);
  font-size: 36px;
`;

export const ProfileHeadingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const UserNameText = styled.p`
  ${interMedium}
  color: var(--Base-Light-Light-20, #91919f);
  font-size: 14px;
  line-height: normal;
`;

export const UserName = styled.p`
  ${interSemiBold}
  color: var(--Base-Dark-Dark-75, #161719);
  font-size: 24px;
  line-height: normal;
`;

export const ProfileInfoItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  /* background-color: #f6f6f6; */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Updated shadow */
  margin-top: 16%;
`;

export const ProfileInfoItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8%;
  padding: 16px;
`;

export const ProfileItemImage = styled.img``;

export const ProfileItemText = styled.p`
  ${interMedium}
  color: var(--Base-Dark-Dark-25, #292b2d);
  font-size: 16px;
  line-height: normal;
`;

export const HorizontalLine = styled.hr`
  width: 100%;
  opacity: 0.2;
`;

export const LogoutHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const LogoutHeading = styled.p`
  color: #000;
  text-align: center;

  /* Title / Title 3 */
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const LogoutDescription = styled.p`
  color: var(--Base-Light-Light-20, #91919f);
  text-align: center;

  /* Body/Body 1 */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const LogoutButtonsContaienr = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Button = styled.button`
  ${interSemiBold}
  display: flex;
  width: 45%;
  height: 56px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  line-height: normal;
  border: none;
  border-radius: 16px;
`;

export const NoButton = styled(Button)`
  color: var(--Violet-Violet-100, #7f3dff);
  background: #eee5ff;
`;

export const YesButton = styled(Button)`
  background: var(--Violet-Violet-100, #7f3dff);
  color: var(--Base-Light-Light-80, #fcfcfc);
`;
