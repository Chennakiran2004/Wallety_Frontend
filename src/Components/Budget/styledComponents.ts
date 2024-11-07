import styled from "styled-components";
import { interMedium } from "../../Constants/fontStyles";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";

export const BudgetMainContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  
  gap: 16px;
  height: 91dvh;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 768px;
    margin: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow here */
    border-radius: 16px;
    height: 72vh;
  }
`;

export const UnderdevelopmentImage = styled.img``;

export const UnderdevelopmentText = styled.p`
  ${interMedium}
  color: #000;
  text-align: center;
  font-size: 20px;
  line-height: normal;
`;

export const BudgetSubContainer = styled.div`
  width: 100%;
  background-color: #7F3DFF;
  height: 100%;
  position: relative;

`

export const HeaderBudget = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 15%;
  align-items: center;
`


export const BudgetSubBottomContainer = styled.div`
  position: absolute;
  height: 85%;
  background-color: #FCFCFC;
  width: 100%;
  bottom: 0;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  display: flex;
`

export const NoBudgetsHeading = styled.h3`
  ${interMedium} 
`

export const BudgetInsideBottomContainer = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

export const CreateBudgetButton = styled(GlobalButton1)`
  position: absolute;
  bottom: 0;
  width: 80%;
  margin: auto;
  align-self: center;
  margin-bottom: 8%;
  max-width: 400px;

  @media(min-width: 768px){
    margin-bottom: 12%;
  }
`

export const ItemCard = styled.div`
  background-color: white;
  height: 100px;
  width: 100%;
`