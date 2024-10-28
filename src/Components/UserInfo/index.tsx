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
  EditProfileMainContianer,
  ProfileError, UpdateProfileButton
} from "./styledComponents";
import { useEffect, useState } from "react";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import axios from "axios";
import { handleAxiosError } from "../../Constants/errorHandler";

interface ProfileInterface {
  email: string;
  full_name: string;
  gender: string;
  role: string;
  salary: string;
  username: string;
}

const UserInfo = () => {
  const { handleBack } = NavigationEvents();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const [profileError ,setProfileError] = useState("")

  const { accessToken, refreshToken, deleteAccessToken, deleteRefereshToken } =
    ChangingTokens();
  const [userData, setUserData] = useState<ProfileInterface | null>();

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const updateProfile = () => {
    try {
      const fetching = async () => {
        const data = {
          email: email,
          full_name: username,
        };

        const response = await axios.post(
          `${url}/update/user_profile/v1`,
          data,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setProfileError("Profile Edited Successful")
      };

      fetching();
    } catch (err) {
      handleAxiosError(err)
    }
  };

  useEffect(() => {
    try {
      const fetching = async () => {
        const response = await axios.get(`${url}/get/user_profile/v1`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setUserData(response.data);
        setUserName(response.data.full_name ?? "");
        setEmail(response.data.email ?? "");
      };



      fetching();
    } catch (err) {
      handleAxiosError(err)
    }
  }, []);

  return (
    <EditProfileMainContianer>
      <SignAndLoginInHeadingContainer>
        <BackImage onClick={handleBack} size={40} />
        <SignAndLoginHeading>Edit Profile</SignAndLoginHeading>
      </SignAndLoginInHeadingContainer>
      <HorizontalLine1 />
      <ProfileInfoMainContainer>
        <FormContainer onSubmit={onSubmit}>
          <InputContainer>
            <InputLabel>Full Name</InputLabel>
            <InputElement value={username} onChange={onChangeUserName} />
          </InputContainer>

          <InputContainer>
            <InputLabel>Email</InputLabel>
            <InputElement value={email} onChange = {(e)=> setEmail(e.target.value)}/>
          </InputContainer>

          {/* <InputContainer>
            <InputLabel>PASSWORD</InputLabel>
            <InputElement disabled
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </InputContainer> */}
          {profileError.length > 0 && <ProfileError>{profileError}</ProfileError>}
          <InputContainer>
          <UpdateProfileButton onClick={updateProfile}>Submit</UpdateProfileButton>
          </InputContainer>
          
        </FormContainer>
      </ProfileInfoMainContainer>
    </EditProfileMainContianer>
  );
};

export default UserInfo;
