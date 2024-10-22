import React, { useState } from "react";
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
} from "./styledComponents";

import { NavigationEvents } from "../../Constants/EventHandlers";
import { IconContianer } from "../signup/signupstyled";
import MyProgressBar from "../ProgressBar";

const FinancialReport = () => {
  const { handleBack } = NavigationEvents();
  const [activeTab, setActiveTab] = useState<"expense" | "income">("expense");

  const handleExpenseClick = () => {
    setActiveTab("expense");
  };

  const handleIncomeClick = () => {
    setActiveTab("income");
  };

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
          <DoughnutChart />
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
        <DoughunChartContainer>
          <MyProgressBar />
        </DoughunChartContainer>
      </FinancialReportContentContainer>
    </FinancialReportMainContainer>
  );
};

export default FinancialReport;
