import { useState } from "react";
import DoughnutChart from "../DoughnutChart";
import {
  FinancialReportContentContainer,
  FinancialReportHeaderContainer,
  FinancialReportHeading,
  FinancialReportMainContainer,
  DoughunChartContainer,
  MonthDropDownContainer,
  MonthDropDown,
  ArrowDown,
  DropDownText,
  IncomeAndExpenseTabs,
  ExpenseButton,
  ExpenseAndIncomeButton,
  ExpensesBarsContainer,
} from "./styledComponents";

import { NavigationEvents } from "../../Constants/EventHandlers";
import { IconContianer } from "../signup/signupstyled";
import ExpensesItem from "../ExpensesItem";
import SalayItem from "../SalaryItem"; // Import the SalaryItem component

const FinancialReport = () => {
  const { handleBack } = NavigationEvents();
  const [activeTab, setActiveTab] = useState<"expense" | "income">("expense");

  const handleExpenseClick = () => {
    setActiveTab("expense");
  };

  const handleIncomeClick = () => {
    setActiveTab("income");
  };

  const expensesData = [
    {
      type: "Shopping",
      amount: "-₹120",
      icon: "/Images/shoppingcolor.svg",
      progress: 70,
      color: "#FCAC12",
    },
    {
      type: "Subcription",
      amount: "-₹250",
      icon: "/Images/subscripitioncolor.svg",
      progress: 50,
      color: "#7F3DFF",
    },
    {
      type: "Food",
      amount: "-₹80",
      icon: "/Images/foodcolor.svg",
      progress: 40,
      color: "#FD3C4A",
    },
  ];

  // Dummy data for income
  const incomeData = [
    {
      type: "Salary",
      amount: "+₹5000",
      icon: "/Images/salarycolor.svg",
      progress: 80,
      color: "#4CAF50",
    },
    {
      type: "Freelance",
      amount: "+₹1500",
      icon: "/Images/salarycolor.svg",
      progress: 60,
      color: "#4CAF50",
    },
  ];

  // Extract amounts and colors for the Doughnut chart based on active tab
  const currentData = activeTab === "expense" ? expensesData : incomeData;
  const amounts = currentData.map((item) =>
    Number(item.amount.replace(/[^0-9.-]+/g, ""))
  );
  const colors = currentData.map((item) => item.color);

  return (
    <FinancialReportMainContainer>
      <FinancialReportContentContainer>
        <FinancialReportHeaderContainer>
          <IconContianer onClick={handleBack} size={40} />
          <FinancialReportHeading>Financial Report</FinancialReportHeading>
        </FinancialReportHeaderContainer>
        <MonthDropDownContainer>
          <MonthDropDown>
            <ArrowDown src="/Images/arrow down 2.svg" />
            <DropDownText>Month</DropDownText>
          </MonthDropDown>
        </MonthDropDownContainer>
        <DoughunChartContainer>
          <DoughnutChart data={amounts} backgroundColors={colors} />
        </DoughunChartContainer>
        <IncomeAndExpenseTabs>
          <ExpenseAndIncomeButton
            as={activeTab === "expense" ? ExpenseButton : "button"}
            onClick={handleExpenseClick}
          >
            Expense
          </ExpenseAndIncomeButton>

          <ExpenseAndIncomeButton
            as={activeTab === "income" ? ExpenseButton : "button"}
            onClick={handleIncomeClick}
          >
            Income
          </ExpenseAndIncomeButton>
        </IncomeAndExpenseTabs>
        <ExpensesBarsContainer>
          {activeTab === "expense"
            ? // Render expense items
              expensesData.map((expense, index) => (
                <ExpensesItem
                  key={index}
                  type={expense.type}
                  amount={expense.amount}
                  icon={expense.icon}
                  progress={expense.progress}
                  color={expense.color}
                />
              ))
            : // Render income items
              incomeData.map((income, index) => (
                <SalayItem
                  key={index}
                  progress={income.progress}
                  color={income.color}
                  icon={income.icon}
                  amount={income.amount}
                />
              ))}
        </ExpensesBarsContainer>
      </FinancialReportContentContainer>
    </FinancialReportMainContainer>
  );
};

export default FinancialReport;
