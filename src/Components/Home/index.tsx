import React, { useEffect, useState } from "react";
import RecenetTransactionItem from "../RecentTransactionItem";
import {
  AccountBalanceContainer,
  AccountBalanceMoney,
  AccountBalanceText,
  ExpenseContainer,
  HomeContentContainer,
  HomeContentSubContainer,
  HomeMainContainer,
  IncomeAndExpenseContainer,
  IncomeAndExpenseHeading,
  IncomeAndExpenseImage,
  IncomeAndExpenseMoney,
  IncomeContainer,
  NoTransactionsMainContainer,
  RecentItemsContainer,
  RecentTransactionsContainer,
  RecentTransactionText,
  SeeAllButton,
  UserName,
  IconAndTextContainer,
} from "./styledComponents";
import {
  AddButtonContainer,
  TabBarItemImage,
} from "../TabBar/styledComponents";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import axios from "axios";
import NoTransactionsComponent from "../NoTransactions";
import { useNavigate } from "react-router-dom";
import { handleAxiosError } from "../../Constants/errorHandler";
import { Oval } from "react-loader-spinner";

// Define interfaces
interface TransactionItem {
  category: string;
  amount: string;
  time: string;
  transaction_id: string;
  description: string;
}

interface Transaction {
  date: string;
  transactions: TransactionItem[];
}

interface UserExpenseDetails {
  Account_Balance: string;
  Expense: string;
  Income: string;
  user_name: string;
}

// Helper function to split currency values
const splitCurrency = (value: string | undefined) => {
  if (!value) return { decimal: "", point: "" };
  const [decimal, point] = value.split(".");
  return { decimal, point };
};

// Loader component
const LoaderSpinner: React.FC = () => (
  <HomeMainContainer style={{ justifyContent: "center" }}>
    <Oval
      height={80}
      width={80}
      color="#7f3dff"
      visible={true}
      ariaLabel="loading"
    />
  </HomeMainContainer>
);

// Component for User Balance
const UserBalance: React.FC<{ userExpense: UserExpenseDetails | null }> = ({
  userExpense,
}) => {
  const { decimal: balanceDecimal, point: balancePoint } = splitCurrency(
    userExpense?.Account_Balance
  );
  const { decimal: incomeDecimal, point: incomePoint } = splitCurrency(
    userExpense?.Income
  );
  const { decimal: expenseDecimal, point: expensePoint } = splitCurrency(
    userExpense?.Expense
  );

  return (
    <HomeContentContainer>
      <HomeContentSubContainer>
        <UserName>Hello {userExpense?.user_name} 👋,</UserName>
        <AccountBalanceContainer>
          <AccountBalanceText>Account Balance</AccountBalanceText>
          <AccountBalanceMoney>
            ₹<span>{balanceDecimal}</span>
            <span style={{ fontSize: "12px" }}>.{balancePoint}</span>
          </AccountBalanceMoney>
        </AccountBalanceContainer>
        <IncomeAndExpenseContainer>
          <IncomeContainer>
            <IconAndTextContainer>
              <IncomeAndExpenseImage src="/Images/income.svg" />
              <IncomeAndExpenseHeading>Income</IncomeAndExpenseHeading>
            </IconAndTextContainer>
            <IncomeAndExpenseMoney>
              ₹<span>{incomeDecimal}</span>
              <span style={{ fontSize: "12px" }}>.{incomePoint}</span>
            </IncomeAndExpenseMoney>
          </IncomeContainer>

          <ExpenseContainer>
            <IconAndTextContainer>
              <IncomeAndExpenseImage src="/Images/expenses.svg" />
              <IncomeAndExpenseHeading>Expense</IncomeAndExpenseHeading>
            </IconAndTextContainer>

            <IncomeAndExpenseMoney>
              ₹<span>{expenseDecimal}</span>
              <span style={{ fontSize: "12px" }}>.{expensePoint}</span>
            </IncomeAndExpenseMoney>
          </ExpenseContainer>
        </IncomeAndExpenseContainer>
      </HomeContentSubContainer>
    </HomeContentContainer>
  );
};

// Component for Recent Transactions
const RecentTransactions: React.FC<{ transactions: Transaction[] }> = ({
  transactions,
}) => (
  <RecentItemsContainer>
    {transactions.length > 0 ? (
      transactions.map((item) =>
        item.transactions.map((eachItem: TransactionItem) => (
          <RecenetTransactionItem
            key={eachItem.transaction_id}
            type={eachItem.category}
            description={eachItem.description}
            price={eachItem.amount}
            time={eachItem.time}
            id={eachItem.transaction_id}
          />
        ))
      )
    ) : (
      <NoTransactionsMainContainer>
        <NoTransactionsComponent />
      </NoTransactionsMainContainer>
    )}
  </RecentItemsContainer>
);

// Main Home Component
const Home: React.FC = () => {
  const navigate = useNavigate();
  const { accessToken } = ChangingTokens();
  const { navigateToTransaction } = NavigationEvents();

  const [isLoading, setIsLoading] = useState<boolean>(true); // Single loading state for entire page
  const [recentTransactionsArr, setRecentTransactionsArr] = useState<
    Transaction[]
  >([]);
  const [userExpense, setUserExpense] = useState<UserExpenseDetails | null>(
    null
  );
  const [noTransactions, setNoTransactions] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const userDetailsResponse = await axios.get(
          `${url}/get_user_details/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setUserExpense(userDetailsResponse.data);

        const transactionsResponse = await axios.post(
          `${url}/get_last_five_transactions/`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (transactionsResponse.data.transactions_by_date) {
          setNoTransactions(true);
        }
        setRecentTransactionsArr(
          transactionsResponse.data.transactions_by_date
        );
      } catch (error) {
        handleAxiosError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [accessToken]);

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <>
      {isLoading ? (
        <>
          <LoaderSpinner />
        </>
      ) : (
        <HomeMainContainer>
          <UserBalance userExpense={userExpense} />

          <RecentTransactionsContainer>
            <RecentTransactionText>Recent Transactions</RecentTransactionText>
            <SeeAllButton onClick={navigateToTransaction}>See All</SeeAllButton>
          </RecentTransactionsContainer>

          <RecentTransactions transactions={recentTransactionsArr} />

          <AddButtonContainer onClick={() => navigate("/expense")}>
            <TabBarItemImage src="/Images/Add.svg" />
          </AddButtonContainer>
        </HomeMainContainer>
      )}
    </>
  );
};

export default Home;
