import {
  HorizontalLine,
  LogoutButtonsContaienr,
  LogoutDescription,
  LogoutHeading,
  LogoutHeadingContainer,
  NoButton,
  ProfileContentContainer,
  ProfileHeadingContainer,
  ProfileHeadingIcon,
  ProfileHeadingIconSymbol,
  ProfileHeadingTextContainer,
  ProfileInfoItemContainer,
  ProfileInfoItemsContainer,
  ProfileItemImage,
  ProfileItemText,
  ProfileMainContainer,
  UserName,
  UserNameText,
  YesButton,
} from "./styledComponents";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Overlay,
  PopupContainer,
  PopUpSubContainer,
} from "../Transaction/styledComponents";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import axios from "axios";
import { handleAxiosError } from "../../Constants/errorHandler";

const popupVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "100%" },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

interface ProfileInterface {
  email: string;
  full_name: string;
  gender: string;
  role: string;
  salary: string;
  username: string;
}

const Profile = () => {
  const [isPopupOpen, setIsPopUpOpen] = useState(false);

  const { navigateToUserInfo, navigateToLogin, navigateToMonthReview } =
    NavigationEvents();
  const { accessToken, refreshToken, deleteAccessToken, deleteRefereshToken } =
    ChangingTokens();

  const [userData, setUserData] = useState<ProfileInterface | null>();

  const handleLogoutClick = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopUpOpen(false);
  };

  const handleLogout = () => {
    const data = {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
    const fetching = async () => {
      try {
        const response = await axios.post(
          `${url}/user_account/logout/v1`,
          data,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        deleteAccessToken();
        deleteRefereshToken();
        navigateToLogin();
      } catch (err) {
        console.log(err);
      }
    };

    fetching();
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
      };

      fetching();
    } catch (err) {
      handleAxiosError(err);
    }
  }, []);

  return (
    <ProfileMainContainer>
      <ProfileContentContainer>
        <ProfileHeadingContainer>
          <ProfileHeadingIcon>
            <ProfileHeadingIconSymbol>
              {userData?.username[0]}
            </ProfileHeadingIconSymbol>
          </ProfileHeadingIcon>
          <ProfileHeadingTextContainer>
            <UserNameText>Useraname</UserNameText>
            <UserName>{userData?.username}</UserName>
          </ProfileHeadingTextContainer>
        </ProfileHeadingContainer>
        <ProfileInfoItemsContainer>
          <ProfileInfoItemContainer onClick={navigateToUserInfo}>
            <ProfileItemImage src="/Images/userinfo.svg" alt="userinfo pic" />
            <ProfileItemText>Edit Profile</ProfileItemText>
          </ProfileInfoItemContainer>
          <HorizontalLine />
          <ProfileInfoItemContainer onClick={navigateToMonthReview}>
            <ProfileItemImage
              src="/Images/mothlyreviewicon.svg"
              alt="userinfo pic"
            />
            <ProfileItemText>Monthly Report</ProfileItemText>
          </ProfileInfoItemContainer>
          <HorizontalLine />
          <ProfileInfoItemContainer onClick={navigateToMonthReview}>
            <ProfileItemImage src="/Images/feedback.svg" alt="userinfo pic" />
            <ProfileItemText>Feedback</ProfileItemText>
          </ProfileInfoItemContainer>
          <HorizontalLine />
          <ProfileInfoItemContainer onClick={handleLogoutClick}>
            <ProfileItemImage src="/Images/logout.svg" alt="logout pic" />
            <ProfileItemText>Logout</ProfileItemText>
          </ProfileInfoItemContainer>
        </ProfileInfoItemsContainer>

        <AnimatePresence mode="wait">
          {isPopupOpen && (
            <Overlay
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={handleClosePopup}
            >
              <PopupContainer
                onClick={(e) => e.stopPropagation()}
                variants={popupVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <PopUpSubContainer>
                  <LogoutHeadingContainer>
                    <LogoutHeading>Logout?</LogoutHeading>
                    <LogoutDescription>
                      Are you sure do you wanna logout?
                    </LogoutDescription>
                  </LogoutHeadingContainer>
                  <LogoutButtonsContaienr>
                    <NoButton onClick={handleClosePopup}>No</NoButton>
                    <YesButton onClick={handleLogout}>Yes</YesButton>
                  </LogoutButtonsContaienr>
                </PopUpSubContainer>
              </PopupContainer>
            </Overlay>
          )}
        </AnimatePresence>
      </ProfileContentContainer>
    </ProfileMainContainer>
  );
};

export default Profile;
