import styled from "styled-components";
import { interMedium } from "../../Constants/fontStyles";

export const TabBarMainContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: absolute;
  bottom: 0;
`;

export const TabBarSubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #fff;
  padding-bottom: 16px;
`;

export const TabBarItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  justify-content: space-between;
  padding-bottom: 8px;
`;

export const TabBarItemImage = styled.img``;

export const TabBarItemText = styled.p`
  ${interMedium}
  color: #c6c6c6;
  font-size: 10px;
  line-height: normal;
`;

export const AddButtonContainer = styled.div`
  position: relative;
  bottom: 2px;
`;
