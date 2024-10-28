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
  IncomeAndExpenseContentContainer,
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
import {handleAxiosError} from '../../Constants/errorHandler'

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

// const recentTransactionsData: Transaction[] = [
//   {
//     category: "Shopping",
//     description: "Buy some groceries",
//     amount: "- ₹120",
//     time: "10:00 AM",
//   },
//   {
//     category: "Subscription",
//     description: "Subscription",
//     amount: "- ₹1500",
//     time: "12:00 PM",
//   },
//   {
//     category: "Shopping",
//     description: "Taxi Fare",
//     amount: "- ₹300",
//     time: "2:30 PM",
//   },
//   {
//     category: "Food",
//     description: "Movie Tickets",
//     amount: "- ₹600",
//     time: "6:00 PM",
//   },
//   {
//     category: "Food",
//     description: "Movie Tickets",
//     amount: "- ₹600",
//     time: "6:00 PM",
//   },
//   {
//     category: "Food",
//     description: "Movie Tickets",
//     amount: "- ₹600",
//     time: "6:00 PM",
//   },
//   {
//     category: "Food",
//     description: "Movie Tickets",
//     amount: "- ₹600",
//     time: "6:00 PM",
//   },
//   {
//     category: "Food",
//     description: "Movie Tickets",
//     amount: "- ₹600",
//     time: "6:00 PM",
//   },
// ];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { navigateToTransaction } = NavigationEvents();
  const [NoTransactions, setNoTransactions] = useState(false);

  const [recentTransactionsArr, setRecentTransactionsArr] = useState<
    Transaction[]
  >([]);
  const [userExpense, setUserExpense] = useState<UserExpenseDetails>();
  const { navigateLogin } = NavigationEvents();
  const { accessToken, deleteAccessToken, deleteRefereshToken } =
    ChangingTokens();

  const isSalaryAdded = localStorage.getItem("isSalaryAdded");

  useEffect(() => {
    if (isSalaryAdded !== "true") {
      navigate("/addNewAccount");
    }
    const fetching = async () => {
      try {
        const response = await axios.get(`${url}/get_user_details/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "Application/json",
          },
        });

        setUserExpense(response.data);

        console.log(response.data);
      } catch (err) {
        handleAxiosError(err)
      }
    };

    const recentTransactions = async () => {
      try {
        const response = await axios.post(
          `${url}/get_last_five_transactions/`,
          {},
          {
            headers: {
              // c73dba9fbf5b480991fbfb404142d994
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "Application/json",
            },
          }
        );
        if (response.data.transactions_by_date) {
          setNoTransactions(true);
        }
        setRecentTransactionsArr(response.data.transactions_by_date);
      } catch (err: any) {
        handleAxiosError(err)
      }
    };

    recentTransactions();
    fetching();
  }, [navigate]);

  const account_balance = userExpense?.Account_Balance.split(".");
  let pointValues = "";
  let decimalValues = "";
  if (account_balance) {
    decimalValues = account_balance[0];
    pointValues = account_balance[1];
    console.log(pointValues);
  }

  const income = userExpense?.Income.split(".");
  let incomeDecimalValues = "";
  let incomePointValues = "";
  if (income) {
    incomeDecimalValues = income[0];
    incomePointValues = income[1];
  }

  const expense = userExpense?.Expense.split(".");
  console.log(expense);
  let expenseDecimalValues = "";
  let expensePointValues = "";
  if (expense) {
    expenseDecimalValues = expense[0];
    expensePointValues = expense[1];
  }

  console.log(userExpense?.Account_Balance);
  console.log(userExpense?.Expense);

  return (
    <HomeMainContainer>
      <HomeContentContainer>
        <HomeContentSubContainer>
          <UserName>Hello {userExpense?.user_name} 👋,</UserName>
          <AccountBalanceContainer>
            <AccountBalanceText>Account Balance</AccountBalanceText>
            <AccountBalanceMoney>
              ₹<span>{decimalValues}</span>
              <span style={{ fontSize: "12px" }}>.{pointValues}</span>
            </AccountBalanceMoney>
          </AccountBalanceContainer>
          <IncomeAndExpenseContainer>
            <IncomeContainer>
              <IconAndTextContainer>
                <IncomeAndExpenseImage src="/Images/income.svg" />
                <IncomeAndExpenseHeading>Income</IncomeAndExpenseHeading>
              </IconAndTextContainer>
              <IncomeAndExpenseMoney>
                ₹<span>{incomeDecimalValues}</span>
                <span style={{ fontSize: "12px" }}>.{incomePointValues}</span>
              </IncomeAndExpenseMoney>
            </IncomeContainer>

            <ExpenseContainer>
              <IconAndTextContainer>
                <IncomeAndExpenseImage src="/Images/expenses.svg" />
                <IncomeAndExpenseHeading>Expense</IncomeAndExpenseHeading>
              </IconAndTextContainer>

              <IncomeAndExpenseMoney>
                ₹<span>{expenseDecimalValues}</span>
                <span style={{ fontSize: "12px" }}>.{expensePointValues}</span>
              </IncomeAndExpenseMoney>
            </ExpenseContainer>
          </IncomeAndExpenseContainer>
        </HomeContentSubContainer>
      </HomeContentContainer>
      <>
        <RecentTransactionsContainer>
          <RecentTransactionText>Recent Transactions</RecentTransactionText>
          <SeeAllButton onClick={navigateToTransaction}>See All</SeeAllButton>
        </RecentTransactionsContainer>
        <RecentItemsContainer>
          {recentTransactionsArr.length > 0 ? (
            recentTransactionsArr.map((item) =>
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
      </>
      <AddButtonContainer onClick={() => navigate("/expense")}>
        <TabBarItemImage src="/Images/Add.svg" />
      </AddButtonContainer>
    </HomeMainContainer>
  );
};

export default Home;
