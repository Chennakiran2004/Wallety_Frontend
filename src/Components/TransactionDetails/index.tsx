import { useState } from "react";
import { NavigationEvents } from "../../Constants/EventHandlers";
import DeletePopUp from "../DeletePopUp";
import { BackIconContainer, ExpenseHeader, ExpenseHeading } from "../Expense/styledComponents"
import { DetailsContainer, DetailsSubContainer, DetailsTopContainer, TransactionDetailsHeader, DeleteIcon, 
    TransactionContentsContainer, TransactionAmount, SalaryMonth, DateTimeDetails 
,TransactionContentsDetails, DateTime,
DetailBottomContainer,
TypeDetailsContainer,
DetailBottomSubContainer,
IncomeType,
IncomeElement} from "./styledComponents"
import { Overlay } from "../Transaction/styledComponents";
import { AnimatePresence } from "framer-motion";
import DeleteSuccessPopUp from "../DeleteSuccessFullPopUp";

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

const TransactionDetails = ()=>{
    const { handleBack } = NavigationEvents();
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [successfulPopUp, setSuccessfulPopUp] = useState(false);

    const togglePopUp = ()=>{
        setDeletePopUp(!deletePopUp)
    }

    const openSuccessPopUp = ()=>{
        setSuccessfulPopUp(true)
    }

    const toggleSuccessPopUp = ()=>{
        setSuccessfulPopUp(!successfulPopUp)
    }

    return (
        <DetailsContainer>
            <DetailsSubContainer>
                <DetailsTopContainer>
                    <TransactionDetailsHeader>
                        <BackIconContainer onClick = {handleBack} size = {40}/>
                        <ExpenseHeading>Detail Transaction</ExpenseHeading>
                        <DeleteIcon onClick = {togglePopUp} src = "/Images/deleteicon.svg"/>
                    </TransactionDetailsHeader>
                <TransactionContentsDetails>
                    <TransactionContentsContainer>
                            <TransactionAmount>$5000</TransactionAmount>
                            <SalaryMonth>Salary for July</SalaryMonth>
                        </TransactionContentsContainer>
                        <DateTimeDetails>
                            <DateTime>Saturday</DateTime>
                            <DateTime>4 June 2021</DateTime>
                            <DateTime>16:20</DateTime>
                        </DateTimeDetails>
                </TransactionContentsDetails>
                <DetailBottomContainer>
                    <DetailBottomSubContainer>
                        <TypeDetailsContainer>
                            <IncomeType>Type</IncomeType>
                            <IncomeElement>Income</IncomeElement>
                        </TypeDetailsContainer>
                        <TypeDetailsContainer>
                            <IncomeType>Category</IncomeType>
                            <IncomeElement>Salary</IncomeElement>
                        </TypeDetailsContainer>
                        <TypeDetailsContainer>
                            <IncomeType>Wallet</IncomeType>
                            <IncomeElement>Chase</IncomeElement>
                        </TypeDetailsContainer>
                    </DetailBottomSubContainer>
                </DetailBottomContainer>
                </DetailsTopContainer>
            </DetailsSubContainer>
            <AnimatePresence mode = "wait">
                {deletePopUp && 
                    <Overlay variants={overlayVariants} initial="hidden" animate="visible" exit="exit">
                        <DeletePopUp closePopUp = {togglePopUp} openSuccessPopUp = {openSuccessPopUp}/>
                    </Overlay>}
            </AnimatePresence>
            <AnimatePresence mode = "wait">
                {successfulPopUp && 
                        <Overlay variants={overlayVariants} initial="hidden" animate="visible" exit="exit">
                            <DeleteSuccessPopUp closePopUp = {toggleSuccessPopUp}/>
                        </Overlay>
                }
            </AnimatePresence>
        </DetailsContainer>
    )
}

export default TransactionDetails