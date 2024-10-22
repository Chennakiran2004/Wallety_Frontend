import React from "react"
import { PopUpSubContainer, PopupContainer } from "../Transaction/styledComponents"
import { DeletePopUpHeading, DeletePopUpSubHeading, DeleteButtonsContainer, NoButton, YesButton } from "./styledcomponents"

interface DeletePopUpProps{
    closePopUp: ()=> void
    openSuccessPopUp: ()=> void
}

const popupVariants = {
    hidden: { opacity: 0, y: '100%' },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '100%' },
  };

const DeletePopUp: React.FC<DeletePopUpProps> = ({closePopUp, openSuccessPopUp})=>{
    const noClick = ()=>{
        closePopUp()
    }

    const yesClick = ()=>{
        closePopUp()
        openSuccessPopUp()
    }

    return(
        <PopupContainer variants={popupVariants} initial="hidden" animate="visible" exit="exit">
            <PopUpSubContainer>
                    <DeletePopUpHeading>Remove this transaction?</DeletePopUpHeading>
                    <DeletePopUpSubHeading>Are you sure do you wanna remove this transaction?</DeletePopUpSubHeading>
                    <DeleteButtonsContainer>
                        <NoButton onClick = {noClick}>No</NoButton>
                        <YesButton onClick = {yesClick}>Yes</YesButton>
                    </DeleteButtonsContainer>
            </PopUpSubContainer>
        </PopupContainer>
    )
}

export default DeletePopUp