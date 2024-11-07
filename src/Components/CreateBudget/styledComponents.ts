import styled from "styled-components";
import { interMedium, interSemiBold } from "../../Constants/fontStyles";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";
import { RupeesSymbol } from "../AddNewAccount/styledComponents";
import { BackIconContainer, RupeesSymbolExpense } from "../Expense/styledComponents";

export const CreateBudgetMainContainer = styled.div`
    height: 100dvh;
    width: 100vw;

    @media screen and (min-width: 768px) {
        width: 768px;
        margin: auto;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15); /* Add shadow here */
        border-radius: 16px;
        height: 85vh;
      }
`

export const CreateBudgetSubContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #7F3DFF;
    align-items: center;
`

export const HeaderContaier = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    padding-top: 40px;
    margin: auto;
`

export const BackIconContainerBudget = styled(BackIconContainer)`
      position: absolute;
      left: 0;
`

export const CreateBudgetHeading = styled.p`
    color: white;
    ${interSemiBold}
    text-align: center;
    width: 100%;
    font-size: 18px;
`

export const BottomContainer = styled.div`
    height: 70%;
    position: absolute;
    bottom: 0;
    width: 100%;

    @media(min-width: 768px){
        height: 80%;
    }
`

export const BottomSubContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items:center;
`

export const EnterMoneyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
    margin-bottom: 4%;
`

export const HowMuchHeading = styled.p`
    ${interSemiBold}
    font-size: 18px;
    color: white;
    opacity: 0.6;
`

export const BudgetAmount = styled.h1`
    font-size: 64px;
    ${interSemiBold}
    color: white;
`

export const MainBottomContainer = styled.div`
    position: absolute;
    bottom: 0;
    height: auto;
    min-height:330px;
    background-color: white;
    width: 100%;
    border-radius: 24px 24px 0px 0px;
`

export const MainBottomSubContainer = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
    align-items: center;
`

export const ReceiveAlert = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`

export const ReceiveAlertTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 80%;
`

export const ReceiveHeading = styled.p`
    ${interMedium}
    font-size: 18px;
    color: black;
    text-align: left;
` 

export const ReceiveSubHeading = styled.p`
    color: #91919F;
    ${interMedium}
    font-size: 16px;
    text-align: left;
`

export const ContinueBottom = styled(GlobalButton1)`
    width: 90%;
    height: 50px;
    margin: auto;
    margin-top: 24px;
    margin-bottom: 24px;
`

export const BudgetRupeeContainer = styled.div`
    display: flex;
    gap: 8px;
`

export const BudgetRupee = styled(RupeesSymbolExpense)`
    font-size: 64px;
    ${interMedium}
`

export const BudgetInput = styled.input`
    text-align: left;
    border: none;
    outline: none;
    background: none;
    font-size: 64px;
    width:100%;

    ${interSemiBold};
    color: white;

    &::placeholder {
    color: white;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    & {
    -moz-appearance: textfield; /* Remove spin buttons in Firefox */
    }
`