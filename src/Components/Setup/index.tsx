import { AnimatePresence } from "framer-motion";
import {
  AccountSetUpContainer,
  AccountSubContainer,
  AccountSetUpHeading,
  AccountSideHeading,
  AccountSetUpContents,
  LetsGo,
} from "./setupstyled";
import { NavigationEvents } from "../../Constants/EventHandlers";
import withAuthRedirect from "../../Constants/WithAuthRedirect";

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
          <AccountSideHeading>
            Account can be your bank, credit card or your wallet.
          </AccountSideHeading>
        </AccountSetUpContents>
        <LetsGo onClick={navigateAddNewAccount}>Let's go</LetsGo>
      </AccountSubContainer>
    </AccountSetUpContainer>
  );
};

export default SetUp;
