import { useEffect, useState } from "react";
import TabBar from "../TabBar";
import {
  TransactionMainContainer,
  TransactionSubContainer,
  FilterContainer,
  FilterImage,
  FilterButton,
  FinancialReportContainer,
  FinancialReportHeading,
  ArrowRight,
  TransactionListContainer,
  ListItem,
  TransactionsContainer,
  ListItemContentsContainer,
  PriceContainer,
  DescriptionContainer,
  DateHeading,
  CategoryHeading,
  PriceHeading,
  DescriptionHeading,
  TimeElement,
  Overlay,
  PopupContainer,
  PopUpSubContainer,
  FilterPopUpHeadingContainer,
  ResetButton,
  FilterPopUpHeading,
  SortByContainer,
  PopUpSubHeading,
  SortByItemsContainer,
  SortItem,
  CategoryContainer,
  CategorySideHeading,
  CategoryButtonContainer,
  CategoryItemSelectedContainer,
  NumberOfItemsSelected,
  ApplyButton,
  NumberOfFilters,
  NumberOfFiltersContainer,
  CategoryItemsContainer,
} from "./styledComponents";
import { motion, AnimatePresence } from "framer-motion";
import TransactionList from "../TransactionList";
import FilterPopup from "../FilterPopUp";
import CategoryPopup from "../CategoryPopUp";
import {
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import axios from "axios";
import NoTransactionsComponent from "../NoTransactions";
import MonthReviewPopUp from "../MonthReviewPopUp";

import {
  MonthDropDownContainer,
  MonthDropDown,
  DropDownText,
} from "../FinancialReport/styledComponents";

const data = [
  {
    date: "Today",
    details: [
      {
        id: "1",
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/shoppingicon.svg",
      },
      {
        id: "2",
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/foodicon.svg",
      },
      {
        id: "3",
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/transportation.svg",
      },
      {
        id: "4",
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/shoppingicon.svg",
      },
    ],
  },
  {
    date: "Yesterday",
    details: [
      {
        id: "5",
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/foodicon.svg",
      },
      {
        id: "6",
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/transportation.svg",
      },
      {
        id: "7",
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/shoppingicon.svg",
      },
      {
        id: "8",
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/transportation.svg",
      },
    ],
  },
];

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

const dropdownVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
};

const arrowVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const mainPopupExit = {
  hidden: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

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

const sortOptions = ["Highest", "Lowest", "Oldest"];
const categoryOptions = [
  "Shopping",
  "Food",
  "Travel",
  "Health",
  "Entertainment",
  "Rent",
  "Miscellaneous",
];

const Transaction = () => {
  const [transactionsArr, setTransactionsArr] = useState<Transaction[]>([]);

  const [tempSortOptions, setTempSortOptions] = useState<string[]>([]);

  const [isPopupOpen, setIsPopUpOpen] = useState(false);
  const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false);

  const [selectedSortOptions, setSelectedSortOptions] = useState<string[]>([]);
  const [finalSortOptions, setFinalSortOptions] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState("Month");

  const [isMonthDropdownOpen, setMonthDropdownOpen] = useState(false);

  const [selectedCategoryOptions, setSelectedCategoryOptions] = useState<
    string[]
  >([]);

  const [NoTransactions, setNoTransactions] = useState(false);

  const { accessToken } = ChangingTokens();

  const [numberOfFilters, setNumberofFilters] = useState(0);

  const { navigateToFinancialReport } = NavigationEvents();

  const [showMonthReview, setShowMonthReview] = useState(false);

  const [overSpent, setOverSpent] = useState(0);

  const toggleMontlyPopUp = () => {
    setShowMonthReview(false);
  };

  const handleSortSelection = (option: string) => {
    if (option === selectedSortOptions[0]) {
      return setTempSortOptions([]);
    }
    setTempSortOptions([option]);
  };

  const handleCategorySelection = (option: string) => {
    if (option === selectedCategoryOptions[0]) {
      return setSelectedCategoryOptions([]);
    }
    setSelectedCategoryOptions([option]);
  };

  const togglePopUp = () => {
    setIsPopUpOpen(!isPopupOpen);
  };

  const openCategoryPopup = () => {
    setIsPopUpOpen(false);
    setIsCategoryPopupOpen(true);
  };

  const closeCategoryPopup = () => {
    setIsCategoryPopupOpen(false);
    setIsPopUpOpen(true);
  };

  const handleMonthClick = (month: string) => {
    setSelectedMonth(month);
    setMonthDropdownOpen(false); // Close dropdown after selection
  };

  const applyFilters = () => {
    const count = selectedSortOptions.length;
    const countB = selectedCategoryOptions.length > 0 ? 1 : 0;
    setNumberofFilters(count + countB);
    togglePopUp();
    setFinalSortOptions(sortOptions);

    const fetching = async () => {
      const body = {
        Highest: selectedSortOptions.includes("Highest"),
        Lowest: selectedSortOptions.includes("Lowest"),
        Oldest: selectedCategoryOptions.includes("Oldest"),
        Categories: selectedCategoryOptions[0],
      };

      try {
        const response = await axios.post(
          `${url}/get_transaction_filters/`,
          body,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "Application/json",
            },
          }
        );

        setTransactionsArr(response.data.transactions_by_date);
      } catch (err) {
        console.log(err);
      }
    };

    fetching();
  };

  const resetFilters = () => {
    setSelectedSortOptions([]);
    setSelectedCategoryOptions([]);
  };

  useEffect(() => {
    const today = new Date();
    const currentDate = today.getDate();

    console.log("Current Date:", currentDate);
    console.log(
      "LocalStorage monthReviewPopUp:",
      localStorage.getItem("monthReviewPopUp")
    );

    const checkOverSpent = async () => {
      try {
        const response = await axios.post(
          `${url}/get_user_expenses_comparison_at_eom/`,
          {
            month: "10",
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "Application/json",
            },
          }
        );
        const categories = response.data.under_spent.map(
          (eachItem: any) => eachItem.category
        );
        const overSpentCategories = response.data.over_spent.map(
          (eachItem: any) => eachItem.category
        );
        if (response.data.over_spent.length > 0) {
          if (
            currentDate >= 24 &&
            currentDate <= 31 &&
            localStorage.getItem("monthReviewPopUp") === null
          ) {
            localStorage.setItem("monthReviewPopUp", "true");
            setShowMonthReview(true);
            console.log("Month Review Popup is now set to show.");
          }
        }
      } catch (e) {
        console.log(e);
      }
    };

    checkOverSpent();

    // Check if it's between 25-31 and if the popup hasn't been shown before
    if (
      currentDate >= 24 &&
      currentDate <= 31 &&
      localStorage.getItem("monthReviewPopUp") === null
    ) {
      localStorage.setItem("monthReviewPopUp", "true");
      setShowMonthReview(true);
      console.log("Month Review Popup is now set to show.");
    }

    // Fetch transactions
    const fetching = async () => {
      try {
        const response = await axios.post(
          `${url}/get_last_all_transactions/`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-type": "Application/json",
            },
          }
        );

        if (response.data.transactions_by_date.length === 0) {
          setNoTransactions(true);
        } else {
          setTransactionsArr(response.data.transactions_by_date);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetching();
  }, [accessToken]);

  return (
    <>
      <TransactionMainContainer>
        <TransactionSubContainer>
          {!NoTransactions ? (
            <>
              <FilterContainer>
                {/* <MonthDropDownContainer>
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
                </MonthDropDownContainer> */}
                <FilterButton onClick={togglePopUp}>
                  <FilterImage src="/Images/filtericon.svg" />
                  {numberOfFilters > 0 && (
                    <NumberOfFiltersContainer>
                      <NumberOfFilters>{numberOfFilters}</NumberOfFilters>
                    </NumberOfFiltersContainer>
                  )}
                </FilterButton>
              </FilterContainer>
              <FinancialReportContainer onClick={navigateToFinancialReport}>
                <FinancialReportHeading>
                  See your financial report
                </FinancialReportHeading>
                <ArrowRight src="/Images/arrow-right-2.svg" />
              </FinancialReportContainer>
              <TransactionsContainer>
                {!NoTransactions ? (
                  transactionsArr.map((eachItem, index) => (
                    <TransactionList
                      key={index}
                      date={eachItem.date}
                      details={eachItem.transactions}
                    />
                  ))
                ) : (
                  <NoTransactionsComponent />
                )}
              </TransactionsContainer>

              <AnimatePresence mode="wait">
                {isPopupOpen && (
                  <Overlay
                    onClick={togglePopUp}
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <FilterPopup
                      selectedSortOptions={tempSortOptions}
                      selectedCategoryOptions={selectedCategoryOptions}
                      handleSortSelection={handleSortSelection}
                      togglePopUp={togglePopUp}
                      applyFilters={applyFilters}
                      resetFilters={resetFilters}
                      openCategoryPopup={openCategoryPopup}
                      sortOptions={sortOptions}
                    />
                  </Overlay>
                )}

                {isCategoryPopupOpen && (
                  <Overlay
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={closeCategoryPopup}
                  >
                    <CategoryPopup
                      selectedCategoryOptions={selectedCategoryOptions}
                      handleCategorySelection={handleCategorySelection}
                      categoryOptions={categoryOptions}
                      closeCategoryPopup={closeCategoryPopup}
                    />
                  </Overlay>
                )}
              </AnimatePresence>
            </>
          ) : (
            <NoTransactionsComponent />
          )}
        </TransactionSubContainer>
      </TransactionMainContainer>
      {showMonthReview && (
        <MonthReviewPopUp toggleMontlyPopUp={toggleMontlyPopUp} />
      )}
    </>
  );
};

export default Transaction;
