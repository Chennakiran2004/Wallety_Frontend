import {
  FormContainer,
  HorizontalLine1,
  InputElement,
  InputLabel,
  SignAndLoginHeading,
  SignAndLoginInHeadingContainer,
  ProfileInfoMainContainer,
  BackImage,
  Button,
  InputContainer,
} from "./styledComponents";
import { useState } from "react";
import { NavigationEvents } from "../../Constants/EventHandlers";

const UserInfo = () => {
  const { handleBack } = NavigationEvents();

  const [username, setUserName] = useState("Kiran_Kumar");
  const [email, setEmail] = useState("kirankumar@gmail.com");
  const [password, setPassword] = useState("********");

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <SignAndLoginInHeadingContainer>
        <BackImage onClick={handleBack} size={40} />
        <SignAndLoginHeading>Edit Profile</SignAndLoginHeading>
      </SignAndLoginInHeadingContainer>
      <HorizontalLine1 />
      <ProfileInfoMainContainer>
        <FormContainer onSubmit={onSubmit}>
          <InputContainer>
            <InputLabel>USER Name</InputLabel>
            <InputElement value={username} onChange={onChangeUserName} />
          </InputContainer>

          <InputContainer>
            <InputLabel>EMAIL</InputLabel>
            <InputElement value={email} onChange={onChangeEmail} />
          </InputContainer>

          <InputContainer>
            <InputLabel>PASSWORD</InputLabel>
            <InputElement
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </InputContainer>
          <Button>Submit</Button>
        </FormContainer>
      </ProfileInfoMainContainer>
    </>
  );
};

export default UserInfo;
