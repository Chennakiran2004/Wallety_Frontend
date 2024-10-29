// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { ChatBotMainContainer, ChatBotSubContainer, 
//     ChatWithHeading, Headings, NameHeading, TopContainerChatBot,
//     TopContainerContents, IconsContainer, MainChatContainer, 
//     FromMessage, MainChatSubContainer,
//     MessageElement, ToMessage, ToMessageElement, InputFieldContainer,
//     InputElement, SendButton} from "./styledcomponents";

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

// const ChatBot = () => {
//     const [messages, setMessages] = useState<Message[]>([]);
//     const [input, setInput] = useState<string>('');
//     const messagesEndRef = useRef<HTMLDivElement>(null);
//     const inputRef = useRef<HTMLInputElement>(null);

//     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setInput(event.target.value);
//     };

//     const sendMessage = () => {
//         if (input.trim()) {
//             const newMessage: Message = { text: input, fromUser: true };
//             setMessages(prevMessages => [...prevMessages, newMessage]);
//             const aiMessage: Message = { text: "Certainly! Let's put together the full React component code along with the animated styled components using Framer Motion for your chat application. Here is how you can structure and implement it:", fromUser: false };
//             setMessages(prevMessages => [...prevMessages, aiMessage]);
//             setInput('');
//             if (inputRef.current) {
//                 inputRef.current.blur();
//             }
//         }
//     };

//     const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//         if (event.key === 'Enter') {
//             sendMessage();
//         }
//     };

//     useEffect(() => {
//         if (messagesEndRef.current) {
//             messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
//         }
//     }, [messages]);

//     return (
//         <ChatBotMainContainer>
//             <ChatBotSubContainer>
//                 <TopContainerChatBot>
//                     <TopContainerContents>
//                         <img src="/Images/profileSmallIcon.svg" alt="Profile Icon" />
//                         <Headings>
//                             <ChatWithHeading>Chat With</ChatWithHeading>
//                             <NameHeading>Riya</NameHeading>
//                         </Headings>
//                         <IconsContainer>
//                             <img src="/Images/deleteSession.svg" alt="Delete Session" />
//                         </IconsContainer>
//                     </TopContainerContents>
//                 </TopContainerChatBot>
//                 <MainChatContainer>
//                     <MainChatSubContainer ref={messagesEndRef}>
//                         {messages.map((message, index) => (
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
//                     <InputFieldContainer>
//                         <InputElement 
//                             ref={inputRef}
//                             value={input}
//                             onChange={handleInputChange}
//                             onKeyPress={handleKeyPress}
//                             placeholder="Type a message to Riya ..."
//                         />
//                         <SendButton onClick={sendMessage}>
//                             <img src="/Images/sendIcon.svg" alt="Send" />
//                         </SendButton>
//                     </InputFieldContainer>
//                 </MainChatContainer>
//             </ChatBotSubContainer>
//         </ChatBotMainContainer>
//     );
// };

// export default ChatBot;


const ChatBot = ()=>{
    return(
        <h1>ChatBot Page</h1>
    )
}

export default ChatBot