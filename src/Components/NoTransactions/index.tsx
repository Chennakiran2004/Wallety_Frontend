import { NavigationEvents } from "../../Constants/EventHandlers";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";
import {
  NoTransactionsContainer,
  NoTransactionsHeading,
} from "./styledcomponents";

const NoTransactionsComponent = () => {
  const { navigateToExpense } = NavigationEvents();
  return (
    <NoTransactionsContainer>
      <NoTransactionsHeading>No Transactions Found</NoTransactionsHeading>
      <GlobalButton1 onClick={navigateToExpense}>Add Transaction</GlobalButton1>
    </NoTransactionsContainer>
  );
};

export default NoTransactionsComponent;
