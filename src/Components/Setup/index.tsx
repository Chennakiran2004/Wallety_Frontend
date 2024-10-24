import {
  AccountSetUpContainer,
  AccountSubContainer,
  AccountSetUpHeading,
  AccountSetUpContents,
  LetsGo,
  TextContainer,
  TextImage,
  Text,
} from "./setupstyled";
import { NavigationEvents } from "../../Constants/EventHandlers";

const SetUp = () => {
  const { navigateAddNewAccount } = NavigationEvents();

  return (
    <AccountSetUpContainer>
      <AccountSubContainer>
        <AccountSetUpContents>
          <AccountSetUpHeading>
            Let’s setup your <br />
            account!
          </AccountSetUpHeading>
          <TextContainer>
            <TextImage src="/Images/infoicon.svg" />
            <Text>
              We want to assure you that this application does not require you
              to enter any bank details.
            </Text>
          </TextContainer>
        </AccountSetUpContents>
        <LetsGo onClick={navigateAddNewAccount}>Let's go</LetsGo>
      </AccountSubContainer>
    </AccountSetUpContainer>
  );
};

export default SetUp;
