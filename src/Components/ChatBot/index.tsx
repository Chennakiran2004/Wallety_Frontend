// // import React, { useState, useEffect, useRef } from 'react';
// // import { motion } from 'framer-motion';
// // import { ChatBotMainContainer, ChatBotSubContainer,
// //     ChatWithHeading, Headings, NameHeading, TopContainerChatBot,
// //     TopContainerContents, IconsContainer, MainChatContainer,
// //     FromMessage, MainChatSubContainer,
// //     MessageElement, ToMessage, ToMessageElement, InputFieldContainer,
// //     InputElement, SendButton} from "./styledcomponents";

// import axios from "axios";
// import { BackButton, BottomContainer, ChatBotMainContainer, ChatBotMainSubContainer, ChatWithHeading, FromMessage, HeaderContents, HeaderTopContents, Headings, InputElementStyling, MainChatContainer, MainChatSubContainer, MessageElement, NameHeading, SendButton, SubmitButtonChat, ToMessage, ToMessageElement } from "./styledcomponents"
// import { useState, useRef } from "react";
// import { ChangingTokens, url } from "../../Constants/EventHandlers";
// import { handleAxiosError } from "../../Constants/errorHandler";

// // interface Message {
// //     text: string;
// //     fromUser: boolean;
// // }

// // const fromVariants = {
// //     hidden: { x: 50, opacity: 0 },
// //     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }
// // };

// // const toVariants = {
// //     hidden: { x: -50, opacity: 0 },
// //     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }
// // };

// // const ChatBot = () => {
// //     const [messages, setMessages] = useState<Message[]>([]);
// //     const [input, setInput] = useState<string>('');
// //     const messagesEndRef = useRef<HTMLDivElement>(null);
// //     const inputRef = useRef<HTMLInputElement>(null);

// //     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //         setInput(event.target.value);
// //     };

// //     const sendMessage = () => {
// //         if (input.trim()) {
// //             const newMessage: Message = { text: input, fromUser: true };
// //             setMessages(prevMessages => [...prevMessages, newMessage]);
// //             const aiMessage: Message = { text: "Certainly! Let's put together the full React component code along with the animated styled components using Framer Motion for your chat application. Here is how you can structure and implement it:", fromUser: false };
// //             setMessages(prevMessages => [...prevMessages, aiMessage]);
// //             setInput('');
// //             if (inputRef.current) {
// //                 inputRef.current.blur();
// //             }
// //         }
// //     };

// //     const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
// //         if (event.key === 'Enter') {
// //             sendMessage();
// //         }
// //     };

// //     useEffect(() => {
// //         if (messagesEndRef.current) {
// //             messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
// //         }
// //     }, [messages]);

// //     return (
// //         <ChatBotMainContainer>
// //             <ChatBotSubContainer>
// //                 <TopContainerChatBot>
// //                     <TopContainerContents>
// //                         <img src="/Images/profileSmallIcon.svg" alt="Profile Icon" />
// //                         <Headings>
// //                             <ChatWithHeading>Chat With</ChatWithHeading>
// //                             <NameHeading>Riya</NameHeading>
// //                         </Headings>
// //                         <IconsContainer>
// //                             <img src="/Images/deleteSession.svg" alt="Delete Session" />
// //                         </IconsContainer>
// //                     </TopContainerContents>
// //                 </TopContainerChatBot>
// //                 <MainChatContainer>
// //                     <MainChatSubContainer ref={messagesEndRef}>
// //                         {messages.map((message, index) => (
// //                             message.fromUser ?
// //                                 <FromMessage
// //                                     key={index}
// //                                     variants={fromVariants}
// //                                     initial="hidden"
// //                                     animate="visible"
// //                                 >
// //                                     <MessageElement>{message.text}</MessageElement>
// //                                 </FromMessage>
// //                                 :
// //                                 <ToMessage
// //                                     key={index}
// //                                     variants={toVariants}
// //                                     initial="hidden"
// //                                     animate="visible"
// //                                 >
// //                                     <ToMessageElement>{message.text}</ToMessageElement>
// //                                 </ToMessage>
// //                         ))}
// //                     </MainChatSubContainer>
// //                     <InputFieldContainer>
// //                         <InputElement
// //                             ref={inputRef}
// //                             value={input}
// //                             onChange={handleInputChange}
// //                             onKeyPress={handleKeyPress}
// //                             placeholder="Type a message to Riya ..."
// //                         />
// //                         <SendButton onClick={sendMessage}>
// //                             <img src="/Images/sendIcon.svg" alt="Send" />
// //                         </SendButton>
// //                     </InputFieldContainer>
// //                 </MainChatContainer>
// //             </ChatBotSubContainer>
// //         </ChatBotMainContainer>
// //     );
// // };

// // export default ChatBot;

// interface Message {
//     text: string;
//     fromUser: boolean;
// }

// const fromVariants = {
//     hidden: { x: 50, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }
// };

// const toVariants = {
//     hidden: { x: -50, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }
// };

// const ChatBot = ()=>{
//         const [messages, setMessages] = useState<Message[]>([]);
//     const [input, setInput] = useState<string>('');
//     const messagesEndRef = useRef<HTMLDivElement>(null);
//     const inputRef = useRef<HTMLInputElement>(null);

//     const { accessToken} = ChangingTokens();

//     const sendMessage = () => {
//                 if (input.trim()) {
//                     const newMessage: Message = { text: input, fromUser: true };
//                     setMessages(prevMessages => [...prevMessages, newMessage]);
//                     //send request
//                     const fetching = async()=>{
//                         try{
//                             const body = {
//                                 message: input
//                             }
//                             const response = await axios.post(`${url}/generate_personalized_response/`, body, {
//                                 headers: {
//                                   Authorization: `Bearer ${accessToken}`,
//                                 },
//                               });
//                               console.log(response)
//                               const aiMessage: Message = { text: response.data.response, fromUser: false };
//                             setMessages(prevMessages => [...prevMessages, aiMessage]);
//                             setInput('');
//                             if (inputRef.current) {
//                                 inputRef.current.blur();
//                             }

//                         }catch(e){
//                             handleAxiosError(e)
//                         }
//                     }

//                     fetching()
//                 }
//         };

//             const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//                 setInput(event.target.value);
//             };

//             const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//                     if (event.key === 'Enter') {
//                         sendMessage();
//                     }
//             };

//     return(
//         <ChatBotMainContainer>
//             <ChatBotMainSubContainer>
//                 <HeaderTopContents>
//                         <BackButton/>
//                         <Headings>
//                             <img src = "/Images/profileSmallIcon.svg"/>
//                             <HeaderContents>
//                                 <ChatWithHeading>Chat With</ChatWithHeading>
//                                 <NameHeading>Riya</NameHeading>
//                             </HeaderContents>
//                         </Headings>
//                         <img src = "/Images/deleteSessionIcon.svg"/>
//                 </HeaderTopContents>
//                 <MainChatContainer>
//                     <MainChatSubContainer>
//                     {messages.map((message, index) => (
//                             message.fromUser ?
//                                 <FromMessage
//                                     key={index}
//                                     variants={fromVariants}
//                                     initial="hidden"
//                                     animate="visible"
//                                 >
//                                     <MessageElement>{message.text}</MessageElement>
//                                 </FromMessage>
//                                 :
//                                 <ToMessage
//                                     key={index}
//                                     variants={toVariants}
//                                     initial="hidden"
//                                     animate="visible"
//                                 >
//                                     <ToMessageElement>{message.text}</ToMessageElement>
//                                 </ToMessage>
//                         ))}
//                     </MainChatSubContainer>
//                 </MainChatContainer>
//                 <BottomContainer>
//                         <InputElementStyling onKeyPress={handleKeyPress} onChange={handleInputChange} placeholder="Type a message to Riya..."/>
//                         <SendButton onClick={sendMessage}></SendButton>
//                 </BottomContainer>
//             </ChatBotMainSubContainer>
//         </ChatBotMainContainer>
//     )
// }

// export default ChatBot

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// interface Message {
//   text: string;
//   sender: "user" | "bot";
// }

// const InputComponent: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState(""); // Track user input
//   const [isFocused, setIsFocused] = useState(false); // Track input focus

//   // Update the viewport height CSS variable dynamically
//   const updateViewportHeight = () => {
//     document.documentElement.style.setProperty(
//       "--vh",
//       `${window.innerHeight * 0.01}px`
//     );
//   };

//   useEffect(() => {
//     updateViewportHeight(); // Initial update on mount
//     window.addEventListener("resize", updateViewportHeight); // Update on resize

//     // Clean up on unmount
//     return () => window.removeEventListener("resize", updateViewportHeight);
//   }, []);

//   const handleFocus = () => {
//     setIsFocused(true);
//     document.body.classList.add("no-scroll");
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//     document.body.classList.remove("no-scroll");
//   };

//   // Simulate a bot response
//   const generateBotResponse = (userMessage: string): string => {
//     return `You said: "${userMessage}", here's my response!`;
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     if (input.trim() === "") return;

//     // Add user's message to messages array
//     const userMessage: Message = { text: input, sender: "user" };
//     setMessages((prevMessages) => [...prevMessages, userMessage]);

//     // Generate bot response and add to messages array
//     const botMessage: Message = {
//       text: generateBotResponse(input),
//       sender: "bot",
//     };

//     setTimeout(() => {
//       setMessages((prevMessages) => [...prevMessages, botMessage]);
//     }, 500); // Simulate response delay

//     setInput(""); // Clear input field
//   };

//   return (
//     <ChatContainer isFocused={isFocused}>
//       <MessagesContainer>
//         {messages.map((message, index) => (
//           <MessageBubble key={index} sender={message.sender}>
//             {message.text}
//           </MessageBubble>
//         ))}
//       </MessagesContainer>
//       <Form onSubmit={handleSubmit}>
//         <StyledInput
//           type="text"
//           placeholder="Type a message..."
//           onFocus={handleFocus}
//           onBlur={handleBlur}
//           onChange={(e) => setInput(e.target.value)}
//           value={input}
//         />
//         <SendButton type="submit"></SendButton>
//       </Form>
//     </ChatContainer>
//   );
// };

// export default InputComponent;

// const ChatContainer = styled.div<{ isFocused: boolean }>`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   max-width: 768px;
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   height: ${(props) =>
//     props.isFocused ? "auto" : "calc(var(--vh, 1vh) * 100)"};
//   overflow: hidden; /* Prevents resizing when keyboard opens */

//   @media (min-width: 768px) {
//     position: relative;
//     max-width: 768px;
//     max-height: 72vh;
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
//     border-radius: 16px;
//     padding: 16px;
//   }
// `;

// const MessagesContainer = styled.div`
//   flex: 1;
//   padding: 10px;
//   overflow-y: auto;
//   display: flex;
//   flex-direction: column;
//   scrollbar-width: none;
//   margin-bottom: 60px; /* Space for the fixed input area */
// `;

// const MessageBubble = styled.div<{ sender: "user" | "bot" }>`
//   align-self: ${(props) =>
//     props.sender === "user" ? "flex-end" : "flex-start"};
//   background-color: ${(props) =>
//     props.sender === "user" ? "#DCF8C6" : "#eee"};
//   color: #333;
//   padding: 10px;
//   border-radius: 8px;
//   margin: 5px 0;
//   max-width: 80%;
// `;

// const Form = styled.form`
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   max-width: 768px;
//   display: flex;
//   align-items: center;
//   padding: 10px;
//   border-top: 1px solid #ddd;
//   background-color: white;
//   box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
//   @media(min-width: 768px){
//     position: relative;
//     max-width: 768px;
//   }
// `;

// const StyledInput = styled.input`
//   flex: 1;
//   padding: 10px;
//   font-size: 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   outline: none;
// `;

// const SendButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 10px 15px;
//   margin-left: 5px;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 16px;
//   width: 48px;
//     height: 48px;
//     border: none;
//     background: url('/Images/sendIcon.svg') no-repeat center;
//     background-size: contain;
//     margin-right: 16px;
// `;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  BackButton,
  ChatWithHeading,
  HeaderContents,
  HeaderTopContents,
  Headings,
  NameHeading,
} from "./styledcomponents";
import axios from "axios";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import { handleAxiosError } from "../../Constants/errorHandler";
import NotFound from "../NotFound";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const InputComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState(""); // Track user input
  const [isFocused, setIsFocused] = useState(false); // Track input focus
  const messagesEndRef = useRef<HTMLDivElement>(null); // Reference to the end of the messages container

  // Scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { accessToken, refreshToken, deleteAccessToken, deleteRefereshToken } =
    ChangingTokens();

  const { handleBack } = NavigationEvents();

  // Update the viewport height CSS variable dynamically
  const updateViewportHeight = () => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`
    );
  };

  useEffect(() => {
    updateViewportHeight(); // Initial update on mount
    window.addEventListener("resize", updateViewportHeight); // Update on resize

    // Clean up on unmount
    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  useEffect(() => {
    scrollToBottom(); // Scroll to the latest message whenever messages change
  }, [messages]);

  const handleFocus = () => {
    setIsFocused(true);
    document.body.classList.add("no-scroll");
  };

  const handleBlur = () => {
    setIsFocused(false);
    document.body.classList.remove("no-scroll");
  };

  // Simulate a bot response
  const generateBotResponse = async(userMessage: string)=> {
    try {
      const body = {
        message: input,
      };
      const response = await axios.post(
        `${url}/generate_personalized_response/`,
        body,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response.data.response)

      return response.data.response
      
    
    }catch(e){
        console.log(e)
        handleAxiosError(e)
        return Promise.reject(e);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setInput("");
    if (input.trim() === "") return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    

    const data = await generateBotResponse(input)
    const botMessage: Message = {
        text: data,
        sender: "bot",
      };

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 500);

  };

  return (
    <ChatContainer>
      <HeaderTopContents>
        <BackButton onClick={handleBack} />
        <Headings>
          <img src="/Images/profileSmallIcon.svg" />
          <HeaderContents>
            <ChatWithHeading>Chat With</ChatWithHeading>
            <NameHeading>Riya</NameHeading>
          </HeaderContents>
        </Headings>
        <img src="/Images/deleteSessionIcon.svg" />
      </HeaderTopContents>
      <MessagesContainer isFocused={isFocused}>
        {messages.map((message, index) => (
          <MessageBubble key={index} sender={message.sender}>
            {message.text}
          </MessageBubble>
        ))}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      <Form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Type a message..."
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <SendButton type="submit"></SendButton>
      </Form>
    </ChatContainer>
  );
};

export default InputComponent;

// Styled Components
const ChatContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 768px;
  background-color: white;
  display: flex;
  flex-direction: column;
 
    height: 100dvh;
  overflow: hidden; /* Prevents resizing when keyboard opens */

  @media (min-width: 768px) {
    position: relative;
    max-width: 768px;
    height: 72vh;
  }
`;

const MessagesContainer = styled.div<{ isFocused: boolean }>`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
   height: ${(props) =>
    props.isFocused ? "auto" : "calc(var(--vh, 1vh) * 100)"};
  margin-bottom: 60px; /* Space for the fixed input area */
`;

const MessageBubble = styled.div<{ sender: "user" | "bot" }>`
  align-self: ${(props) =>
    props.sender === "user" ? "flex-end" : "flex-start"};
  background-color: ${(props) =>
    props.sender === "user" ? "#7F3DFF" : "#F5F5F5"};
  color: ${(props) => (props.sender === "user" ? "white" : "black")};
  padding: 10px;
  border-radius: 8px;
  margin: 5px 0;
  max-width: 80%;
`;

const Form = styled.form`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 768px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    position: relative;
    max-width: 768px;
  }
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

const SendButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-left: 5px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 48px;
  height: 48px;
  border: none;
  background: url("/Images/sendIcon.svg") no-repeat center;
  background-size: contain;
  margin-right: 16px;
`;
