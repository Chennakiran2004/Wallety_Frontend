import styled from "styled-components";
import {
  interMedium,
  interRegular,
  interSemiBold,
} from "../../Constants/fontStyles";

export const SmartSpendingSuggestionsMainContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SmartSpendingSuggestionsSubContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 8%;
`;

export const SmartSpendingSuggestionsHeading = styled.h1`
  ${interSemiBold}
  color: var(--Base-Dark-Dark-50, #212325);
  font-size: 32px;
  line-height: 43px; /* 134.375% */
  text-align: start;
`;

export const SmartSpendingCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex-shrink: 0;
  margin-top: 24px;
  overflow: scroll;
  max-height: 60vh;
`;

export const SmartSpendingItemCard = styled.div`
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 10px;
  border: 1px solid #c5b0ee;
  background: #fff;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.08);
`;

export const SmartSpendingItemContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
`;

export const SmartSpendingContentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SmartSpendingType = styled.p`
  ${interSemiBold}
  color: #010101;
  font-size: 16px;
  line-height: 23px; /* 143.75% */
  letter-spacing: -0.165px;
`;

export const Suggestion = styled.span`
  ${interRegular}
  color: #000;
  font-size: 14px;
  line-height: 23px;
  letter-spacing: -0.165px;
`;

export const SmartSpendingIcon = styled.img``;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 16px;
`;

export const ViewMoreButton = styled.button`
  ${interMedium}
  color: var(--Violet-Violet-100, #7f3dff);
  text-align: center;
  font-size: 10px;
  line-height: 10px; /* 100% */
  text-decoration-line: underline;
  border: none;
  background: none;
  cursor: none;
`;

export const LetsGoContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 90%;
  padding-bottom: 16px;
`;
