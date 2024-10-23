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
import { ChangingTokens, NavigationEvents, url } from "../../Constants/EventHandlers";
import axios from "axios";
import Transaction from "../Transaction";

interface Transaction {
  category: string;
  description: string;
  amount: string;
  time: string;
  date?: string;
}

const recentTransactionsData: Transaction[] = [
  {
    category: "Shopping",
    description: "Buy some groceries",
    amount: "- ₹120",
    time: "10:00 AM",
  },
  {
    category: "Subscription",
    description: "Subscription",
    amount: "- ₹1500",
    time: "12:00 PM",
  },
  {
    category: "Shopping",
    description: "Taxi Fare",
    amount: "- ₹300",
    time: "2:30 PM",
  },
  {
    category: "Food",
    description: "Movie Tickets",
    amount: "- ₹600",
    time: "6:00 PM",
  },
  {
    category: "Food",
    description: "Movie Tickets",
    amount: "- ₹600",
    time: "6:00 PM",
  },
  {
    category: "Food",
    description: "Movie Tickets",
    amount: "- ₹600",
    time: "6:00 PM",
  },
  {
    category: "Food",
    description: "Movie Tickets",
    amount: "- ₹600",
    time: "6:00 PM",
  },
  {
    category: "Food",
    description: "Movie Tickets",
    amount: "- ₹600",
    time: "6:00 PM",
  },
];

const Home: React.FC = () => {
  const { navigateToTransaction } = NavigationEvents();

  const [recentTransactionsArr, setRecentTransactionsArr] = useState<Transaction[] >([])
  const {accessToken} = ChangingTokens();

  useEffect(()=>{
    const fetching = async()=>{
      try{
        const response = await axios.get(`${url}/update_user_expense`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }});

          console.log(response)
      }catch(err){
        console.log(err)
      }
    }

    const recentTransactions = async () => {
      try {
        const response = await axios.post(`${url}/get_last_five_transactions/`, {}, {
          headers: {
            "Authorization": `Bearer c73dba9fbf5b480991fbfb404142d994`,
            "Content-type": "Application/json"
          },
        });
    
        setRecentTransactionsArr(response.data.transactions) // Access the data here
      } catch (err) {
        console.log(err);
      }
    };

    
    recentTransactions()
  }, [])

  return (
    <HomeMainContainer>
      <HomeContentContainer>
        <HomeContentSubContainer>
          <UserName>Hello 👋 Nitesh,</UserName>
          <AccountBalanceContainer>
            <AccountBalanceText>Account Balance</AccountBalanceText>
            <AccountBalanceMoney>₹13,453</AccountBalanceMoney>
          </AccountBalanceContainer>
          <IncomeAndExpenseContainer>
            <IncomeContainer>
              <IncomeAndExpenseImage src="/Images/income.svg" />
              <IncomeAndExpenseContentContainer>
                <IncomeAndExpenseHeading>Income</IncomeAndExpenseHeading>
                <IncomeAndExpenseMoney>₹5000</IncomeAndExpenseMoney>
              </IncomeAndExpenseContentContainer>
            </IncomeContainer>

            <ExpenseContainer>
              <IncomeAndExpenseImage src="/Images/expense.png" />
              <IncomeAndExpenseContentContainer>
                <IncomeAndExpenseHeading>Expenses</IncomeAndExpenseHeading>
                <IncomeAndExpenseMoney>₹5000</IncomeAndExpenseMoney>
              </IncomeAndExpenseContentContainer>
            </ExpenseContainer>
          </IncomeAndExpenseContainer>
        </HomeContentSubContainer>
      </HomeContentContainer>

      <RecentTransactionsContainer>
        <RecentTransactionText>Recent Transactions</RecentTransactionText>
        <SeeAllButton onClick={navigateToTransaction}>See All</SeeAllButton>
      </RecentTransactionsContainer>
      <RecentItemsContainer>
        {recentTransactionsArr.map((transaction, index) => (
          <RecenetTransactionItem
            key={index}
            type={transaction.category}
            description={transaction.description}
            price={transaction.amount}
            time={transaction.time}
          />
        ))}
      </RecentItemsContainer>
    </HomeMainContainer>
  );
};

export default Home;
