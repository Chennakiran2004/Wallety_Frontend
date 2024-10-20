import { AnimatePresence } from "framer-motion";
import {
  AccountSetUpContainer,
  AccountSubContainer,
  AccountSetUpHeading,
  AccountSideHeading,
  AccountSetUpContents,
  LetsGo,
} from "./setupstyled";

const SetUp = () => {
  return (
    <AnimatePresence mode="wait">
      {/* {initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: -300 }} transition={{ duration: 0.2 }}} */}
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
          <LetsGo>Let's go</LetsGo>
        </AccountSubContainer>
      </AccountSetUpContainer>
    </AnimatePresence>
  );
};

export default SetUp;
