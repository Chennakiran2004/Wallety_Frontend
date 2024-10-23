import { useEffect, useState } from "react";
import { ChangingTokens, NavigationEvents, url } from "../../Constants/EventHandlers";
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
import axios from "axios";
import { useParams } from "react-router-dom";

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

interface TransactionInterface{
    amount: string,
    category: string,
    date: string,
    time: string,
    transaction_id: number
}

const TransactionDetails = ()=>{
    const { handleBack } = NavigationEvents();
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [successfulPopUp, setSuccessfulPopUp] = useState(false);

    const [data, setData] = useState<TransactionInterface | null>()

    let { id } = useParams();

    const {accessToken} = ChangingTokens()

    const togglePopUp = ()=>{
        setDeletePopUp(!deletePopUp)
    }

    const openSuccessPopUp = ()=>{
        setSuccessfulPopUp(true)
    }

    const toggleSuccessPopUp = ()=>{
        setSuccessfulPopUp(!successfulPopUp)
    }

    useEffect(()=>{
        const fetching = async()=>{
            try {
                const response = await axios.post(`${url}/get_transaction_details/`, {
                    "transaction_id": id
                }, {
                  headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-type": "Application/json"
                  },
                });

                setData(response.data)

                console.log(response)
            
              } catch (err) {
                console.log(err);
              }
        }

        fetching()
    }, [])

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
                            <TransactionAmount>${data?.amount}</TransactionAmount>
                            <SalaryMonth>Salary for July</SalaryMonth>
                        </TransactionContentsContainer>
                        <DateTimeDetails>
                            <DateTime>Saturday</DateTime>
                            <DateTime>{data?.date}</DateTime>
                            <DateTime>{data?.time}</DateTime>
                        </DateTimeDetails>
                </TransactionContentsDetails>
                <DetailBottomContainer>
                    <DetailBottomSubContainer>
                        <TypeDetailsContainer>
                            <IncomeType>Type</IncomeType>
                            <IncomeElement>Expense</IncomeElement>
                        </TypeDetailsContainer>
                        <TypeDetailsContainer>
                            <IncomeType>Category</IncomeType>
                            <IncomeElement>{data?.category}</IncomeElement>
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
                        <DeletePopUp transactionId = {id ?? ''} closePopUp = {togglePopUp} openSuccessPopUp = {openSuccessPopUp}/>
                    </Overlay>}
            </AnimatePresence>
            <AnimatePresence mode = "wait">
                {successfulPopUp && 
                        <Overlay variants={overlayVariants} initial="hidden" animate="visible" exit="exit">
                            <DeleteSuccessPopUp transactionId = {id ?? ''} closePopUp = {toggleSuccessPopUp}/>
                        </Overlay>
                }
            </AnimatePresence>
        </DetailsContainer>
    )
}

export default TransactionDetails