import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DoughnutChart from "../DoughnutChart";
import {
  FinancialReportContentContainer,
  FinancialReportHeaderContainer,
  FinancialReportHeading,
  FinancialReportMainContainer,
  DoughunChartContainer,
  MonthDropDownContainer,
  MonthDropDown,
  DropDownText,
  IncomeAndExpenseTabs,
  ExpenseButton,
  ExpenseAndIncomeButton,
  ExpensesBarsContainer,
} from "./styledComponents";

import { CategoriesColors, ChangingTokens, NavigationEvents, url } from "../../Constants/EventHandlers";
import { IconContianer } from "../signup/signupstyled";
import ExpensesItem from "../ExpensesItem";
import SalayItem from "../SalaryItem";
import axios from "axios";

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

const arrowVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const FinancialReport = () => {
  const { handleBack } = NavigationEvents();
  const {accessToken} = ChangingTokens();

  const [activeTab, setActiveTab] = useState<"expense" | "income">("expense");
  const [isMonthDropdownOpen, setMonthDropdownOpen] = useState(false); // Dropdown state
  const [selectedMonth, setSelectedMonth] = useState("Month"); // Selected month state
  const [expensesData, setExpensesData] = useState([]);
  const [incomeData, setIncomeData] = useState<
  { type: string; amount: string; icon: string; progress: number; color: string }[]>([]);

  const [total, setTotal] = useState(0)

  const handleExpenseClick = () => {
    setActiveTab("expense");
  };

  const handleIncomeClick = () => {
    setActiveTab("income");
  };

  const handleMonthClick = (month: string) => {
    setSelectedMonth(month);
    setMonthDropdownOpen(false); // Close dropdown after selection
  };

  // const expensesData = [
  //   {
  //     type: "Shopping",
  //     amount: "-₹120",
  //     icon: "/Images/shoppingcolor.svg",
  //     progress: 70,
  //     color: "#FCAC12",
  //   },
  //   {
  //     type: "Subcription",
  //     amount: "-₹250",
  //     icon: "/Images/subscripitioncolor.svg",
  //     progress: 50,
  //     color: "#7F3DFF",
  //   },
  //   {
  //     type: "Food",
  //     amount: "-₹80",
  //     icon: "/Images/foodcolor.svg",
  //     progress: 40,
  //     color: "#FD3C4A",
  //   },
  // ];

  // const incomeData = [
  //   {
  //     type: "Salary",
  //     amount: "+₹5000",
  //     icon: "/Images/salarycolor.svg",
  //     progress: 80,
  //     color: "#4CAF50",
  //   },
  //   {
  //     type: "Freelance",
  //     amount: "+₹1500",
  //     icon: "/Images/salarycolor.svg",
  //     progress: 60,
  //     color: "#4CAF50",
  //   },
  // ];

  const currentData = activeTab === "expense" ? expensesData : incomeData;
  const amounts = currentData.map((item) =>
    Number(item.amount.replace(/[^0-9.-]+/g, ""))
  );
  const colors = currentData.map((item) => item.color);

  useEffect(()=>{
      const fetching = async()=>{

        console.log(selectedMonth)
        try{
            const response = await axios.post(`${url}/get_user_pie_chart_financial_transactions/`, {
              "month": "10"
            }, {headers: {
              "Authorization": `Bearer ${accessToken}`,
              "Content-type": "Application/json"
            }})

            setTotal(response.data.total_expense)
            const expenses = response.data.user_expenses_history.map((item: any) => {
              const categoryTotal = Number(item.total);
              const CategoryColor = CategoriesColors[item.category]
              return {
                type: item.category,
                amount: `-₹${categoryTotal}`,
                icon: "/Images/shoppingcolor.svg", 
                progress: (Number(categoryTotal) / Number(response.data.total_expense)) * 100,
                color: CategoryColor,
              };
            }); 
            setExpensesData(expenses);
        }catch(err){
          console.log(err)
        }
        
      }

      const fetchIncome = async()=>{
        try{
          const response = await axios.get(`${url}/get_user_income_pie_chart/`, {headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-type": "Application/json"
          }})
          
          const incomeDataObj = [
            {
              type: "Salary",
              amount: `+₹${response.data.user_income}`,
              icon: "/Images/salarycolor.svg",
              progress: 100,
              color: "#4CAF50",
            }
          ];
          console.log(incomeDataObj)
          setIncomeData(incomeDataObj)
          
      }catch(err){
        console.log(err)
      }
      }


      fetchIncome();
      fetching();
  }, [selectedMonth])

  return (
    <FinancialReportMainContainer>
      <FinancialReportContentContainer>
        <FinancialReportHeaderContainer>
          <IconContianer onClick={handleBack} size={40} />
          <FinancialReportHeading>Financial Report</FinancialReportHeading>
        </FinancialReportHeaderContainer>
        <MonthDropDownContainer>
          <MonthDropDown
            onClick={() => setMonthDropdownOpen(!isMonthDropdownOpen)}
          >
            <motion.img
              src="/Images/arrow down 2.svg"
              variants={arrowVariants}
              animate={isMonthDropdownOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
              style={{ marginRight: "8px" }}
            />
            <DropDownText>{selectedMonth}</DropDownText>
          </MonthDropDown>
          <AnimatePresence>
            {isMonthDropdownOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  position: "absolute",
                  zIndex: 1,
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                }}
              >
                {months.map((month) => (
                  <div
                    key={month}
                    onClick={() => handleMonthClick(month)}
                    style={{
                      padding: "8px 16px",
                      cursor: "pointer",
                      borderRadius: "4px",
                      backgroundColor:
                        selectedMonth === month ? "#f0f0f0" : "#fff",
                      transition: "background-color 0.2s",
                    }}
                  >
                    {month}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </MonthDropDownContainer>
        <DoughunChartContainer>
          <DoughnutChart data={amounts} total={total} backgroundColors={colors} />
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
            ? expensesData.map((expense: any, index) => (
                <ExpensesItem
                  key={index}
                  type={expense.type}
                  amount={expense.amount}
                  icon={expense.icon}
                  progress={expense.progress}
                  color={expense.color}
                />
              ))
            : incomeData.map((income, index) => (
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
