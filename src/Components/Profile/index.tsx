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
import { useState } from "react";
import {
  Overlay,
  PopupContainer,
  PopUpSubContainer,
} from "../Transaction/styledComponents";
import { NavigationEvents } from "../../Constants/EventHandlers";

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

const Profile = () => {
  const [isPopupOpen, setIsPopUpOpen] = useState(false);

  const { navigateToUserInfo } = NavigationEvents();

  const handleLogoutClick = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopUpOpen(false);
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <ProfileMainContainer>
      <ProfileContentContainer>
        <ProfileHeadingContainer>
          <ProfileHeadingIcon>
            <ProfileHeadingIconSymbol>N</ProfileHeadingIconSymbol>
          </ProfileHeadingIcon>
          <ProfileHeadingTextContainer>
            <UserNameText>Useraname</UserNameText>
            <UserName>Nitesh Sabbavarapu</UserName>
          </ProfileHeadingTextContainer>
        </ProfileHeadingContainer>
        <ProfileInfoItemsContainer>
          <ProfileInfoItemContainer onClick={navigateToUserInfo}>
            <ProfileItemImage src="/Images/userinfo.svg" alt="userinfo pic" />
            <ProfileItemText>User Basic Info</ProfileItemText>
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
