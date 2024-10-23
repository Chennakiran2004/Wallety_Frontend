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
  RecentItemsContainer,
  RecentTransactionsContainer,
  RecentTransactionText,
  SeeAllButton,
  UserName,
} from "./styledComponents";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import axios from "axios";
import NoTransactionsComponent from "../NoTransactions";
import { useNavigate } from "react-router-dom";

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
        console.log(err);
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
        if (err.response) {
          switch (err.response.status) {
            case 400:
              break;
            case 401:
              deleteAccessToken();
              deleteRefereshToken();
              navigateLogin();
              break;
            case 404:
              break;
            case 500:
              break;
            default:
              break;
          }
        }
        console.log(err);
      }
    };

    recentTransactions();
    fetching();
  }, [navigate]);

  return (
    <HomeMainContainer>
      <HomeContentContainer>
        <HomeContentSubContainer>
          <UserName>Hello 👋 {userExpense?.user_name},</UserName>
          <AccountBalanceContainer>
            <AccountBalanceText>Account Balance</AccountBalanceText>
            <AccountBalanceMoney>
              ₹{userExpense?.Account_Balance}
            </AccountBalanceMoney>
          </AccountBalanceContainer>
          <IncomeAndExpenseContainer>
            <IncomeContainer>
              <IncomeAndExpenseImage src="/Images/income.svg" />
              <IncomeAndExpenseContentContainer>
                <IncomeAndExpenseHeading>Income</IncomeAndExpenseHeading>
                <IncomeAndExpenseMoney>
                  {userExpense?.Income}
                </IncomeAndExpenseMoney>
              </IncomeAndExpenseContentContainer>
            </IncomeContainer>

            <ExpenseContainer>
              <IncomeAndExpenseImage src="/Images/expenses.svg" />
              <IncomeAndExpenseContentContainer>
                <IncomeAndExpenseHeading>Expenses</IncomeAndExpenseHeading>
                <IncomeAndExpenseMoney>
                  ₹{userExpense?.Expense}
                </IncomeAndExpenseMoney>
              </IncomeAndExpenseContentContainer>
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
          {recentTransactionsArr.map((Item) =>
            Item.transactions.map((eachItem: TransactionItem) => (
              <RecenetTransactionItem
                key={eachItem.transaction_id}
                type={eachItem.category}
                description={eachItem.description}
                price={eachItem.amount}
                time={eachItem.time}
                id={eachItem.transaction_id}
              />
            ))
          )}
        </RecentItemsContainer>
      </>
    </HomeMainContainer>
  );
};

export default Home;
