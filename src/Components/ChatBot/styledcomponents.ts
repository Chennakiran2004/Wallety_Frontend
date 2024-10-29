// import styled from "styled-components";
// import { motion } from 'framer-motion';

// export const ChatBotMainContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     height: 85dvh;
//     margin: auto;
//     @media screen and (min-width: 768px) {
//         width: 768px;
//         margin: auto;
//         height: 72vh;
//         box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
//         border-radius: 16px;
//     }
// `

// export const ChatBotSubContainer = styled.div`
//     position: relative;
//     width: 100%;       
//     height: 100%;      
// `;

// export const TopContainerChatBot = styled.div`         
//     background-color: #f1f1f1; 
//     z-index: 10;         
//     padding: 16px;
//     border-radius: 0px 0px 16px 16px;
//     background: #7F3DFF;
//     @media (min-width: 768px){
//         border-radius: 16px 16px 0px 0px;
//     }
// `;

// export const TopContainerContents = styled.div`
//     width: 90%;
//     margin: auto;
//     display: flex;
//     align-items: center;
//     gap: 16px;
// `

// export const Headings = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex-grow: 1;
//     gap: 8px;
// `

// export const ChatWithHeading = styled.p`
//     color: white;
//     text-align: left;
// `

// export const NameHeading = styled.p`
//     color: white;
//     text-align: left;
// `

// export const IconsContainer = styled.div``

// export const MainChatContainer = styled.div`    
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     position: relative;
// `

// export const MainChatSubContainer = styled.div`
//     width: 90%;
//     // margin: auto;
//     display: flex;
//     flex-direction: column;
//     gap: 16px;
//     padding: 16px;
//     height: fit-content;
//     max-height: calc(100% - 70px);
//     overflow-y: scroll;
//     overflow-x: hidden;
//     position: relative;
//     padding-bottom: 50px;
//     scrollbar-width: none;
//     @media (min-width: 768px){
//         padding-bottom: 100px;  
//         max-height: 50%;
//     }
// `

// export const FromMessage = styled(motion.div)`
//     max-width: 50%;
//     display: inline-flex;
//     padding: 12px;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;
//     border-radius: 12px 12px 0px 12px;
//     background: #7F3DFF;
//     align-self: flex-end;
// `

// export const MessageElement = styled.p`
//     color: white;
//     text-align: left;
// `

// export const ToMessage = styled(motion.div)`
//     display: inline-flex;
//     padding: 12px;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;
//     border-radius: 0px 12px 12px 12px;
//     background: #F5F5F5;
//     max-width: 70%;
//     align-self: flex-start;
// `

// export const ToMessageElement = styled(MessageElement)`
//     color: black;
// `

// export const InputFieldContainer = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     background: white;
//     align-self: flex-end;
//     gap: 6px;
//     padding-left: 16px;
// `

// export const InputElement = styled.input`
//     flex-grow: 1;
//     border-radius: 12px;
//     background: #FAFAFA;
//     padding: 16px;
//     border: none;
//     margin-left: 4px;
// `

// export const SendButton = styled.button`
//     width: 48px;
//     height: 48px;
//     border: none;
//     background: url('/Images/sendIcon.svg') no-repeat center;
//     background-size: contain;
//     padding: 0;
//     margin-right: 4px;
// `

import styled from "styled-components";
import { IconContianer } from "../signup/signupstyled";

export const ChatBotMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100dvh;
    margin: auto;
    @media screen and (min-width: 768px) {
        width: 768px;
        margin: auto;
        height: 72dvh;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
        border-radius: 16px;
    }
`

export const ChatBotMainSubContainer = styled.div`
    width: 100%;
    height: 100%;
`


export const HeaderTopContents = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    border-radius: 0px 0px 16px 16px;
    background: #7F3DFF;
    display: flex;
    height: 83px;
    padding: 0px 16px;
    align-items: center;
`

export const BackButton = styled(IconContianer)`
    color: white;
    font-size: 32px;
`

export const Headings = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin-left: 48px;
`

export const ChatWithHeading = styled.p`
    color: white;
    text-align: left;
`

export const NameHeading = styled.p`
    color: white;
    text-align: left;
`

export const HeaderContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

export const BottomContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
`

export const InputElementStyling = styled.input`
    flex-grow: 1;
    width: 100%;
`

export const SubmitButtonChat = styled.button`

`