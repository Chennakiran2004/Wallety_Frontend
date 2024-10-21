import React from "react";
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

interface Transaction {
  type: string;
  description: string;
  price: string;
  time: string;
  image: string;
}

const recentTransactionsData: Transaction[] = [
  {
    type: "Shopping",
    description: "Buy some groceries",
    price: "- ₹120",
    time: "10:00 AM",
    image: "/Images/shopping.svg",
  },
  {
    type: "Subscription",
    description: "Subscription",
    price: "- ₹1500",
    time: "12:00 PM",
    image: "/Images/subscription.svg",
  },
  {
    type: "Shopping",
    description: "Taxi Fare",
    price: "- ₹300",
    time: "2:30 PM",
    image: "/Images/shopping.svg",
  },
  {
    type: "Food",
    description: "Movie Tickets",
    price: "- ₹600",
    time: "6:00 PM",
    image: "/Images/food.svg",
  },
  {
    type: "Food",
    description: "Movie Tickets",
    price: "- ₹600",
    time: "6:00 PM",
    image: "/Images/food.svg",
  },
  {
    type: "Food",
    description: "Movie Tickets",
    price: "- ₹600",
    time: "6:00 PM",
    image: "/Images/food.svg",
  },
  {
    type: "Food",
    description: "Movie Tickets",
    price: "- ₹600",
    time: "6:00 PM",
    image: "/Images/food.svg",
  },
  {
    type: "Food",
    description: "Movie Tickets",
    price: "- ₹600",
    time: "6:00 PM",
    image: "/Images/food.svg",
  },
];

const Home: React.FC = () => {
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
        <SeeAllButton>See All</SeeAllButton>
      </RecentTransactionsContainer>
      <RecentItemsContainer>
        {recentTransactionsData.map((transaction, index) => (
          <RecenetTransactionItem
            key={index}
            type={transaction.type}
            description={transaction.description}
            price={transaction.price}
            time={transaction.time}
            image={transaction.image}
          />
        ))}
      </RecentItemsContainer>
    </HomeMainContainer>
  );
};

export default Home;
