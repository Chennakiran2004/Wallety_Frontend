import { useEffect, useState } from "react";
import {
  TransactionMainContainer,
  TransactionSubContainer,
  FilterContainer,
  FilterImage,
  FilterButton,
  FinancialReportContainer,
  FinancialReportHeading,
  ArrowRight,
  TransactionsContainer,
  Overlay,
  NumberOfFilters,
  NumberOfFiltersContainer,
  NoTransactionMain,
} from "./styledComponents";
import { AnimatePresence } from "framer-motion";
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

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// Main Transaction Component
const Transaction = () => {
  const [transactionsArr, setTransactionsArr] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Single loading state for the entire component
  const [isPopupOpen, setIsPopUpOpen] = useState(false);
  const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false);
  const [selectedSortOptions, setSelectedSortOptions] = useState<string[]>([]);
  const [selectedCategoryOptions, setSelectedCategoryOptions] = useState<
    string[]
  >([]);
  const [NoTransactions, setNoTransactions] = useState(false);
  const { accessToken } = ChangingTokens();
  const { navigateToFinancialReport } = NavigationEvents();
  const [numberOfFilters, setNumberofFilters] = useState(0);
  const [showMonthReview, setShowMonthReview] = useState(false);

  // Toggle Monthly PopUp
  const toggleMontlyPopUp = () => setShowMonthReview(false);

  // Toggle Filter Popup
  const togglePopUp = () => setIsPopUpOpen(!isPopupOpen);

  // Handle Sort Selection
  const handleSortSelection = (option: string) => {
    setSelectedSortOptions([option]);
  };

  // Handle Category Selection
  const handleCategorySelection = (option: string) => {
    setSelectedCategoryOptions([option]);
  };

  // Apply Filters and Fetch Filtered Transactions
  const applyFilters = async () => {
    const body = {
      Highest: selectedSortOptions.includes("Highest"),
      Lowest: selectedSortOptions.includes("Lowest"),
      Oldest: selectedSortOptions.includes("Oldest"),
      Categories: selectedCategoryOptions[0],
    };

    setNumberofFilters(
      selectedSortOptions.length + (selectedCategoryOptions.length > 0 ? 1 : 0)
    );
    togglePopUp();

    setIsLoading(true);
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
      handleAxiosError(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset Filters
  const resetFilters = () => {
    setSelectedSortOptions([]);
    setSelectedCategoryOptions([]);
  };

  // Fetch All Transactions
  const fetchAllTransactions = async () => {
    setIsLoading(true);
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
      handleAxiosError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllTransactions();
  }, [accessToken]);

  return (
    <>
      <TransactionMainContainer>
        <TransactionSubContainer>
          {isLoading ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "65dvh",
              }}
            >
              <Oval height={40} width={40} color="#7f3dff" visible={true} />
            </div>
          ) : !NoTransactions ? (
            <>
              <FilterContainer>
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
                {transactionsArr.map((eachItem, index) => (
                  <TransactionList
                    key={index}
                    date={eachItem.date}
                    details={eachItem.transactions}
                  />
                ))}
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
                      selectedSortOptions={selectedSortOptions}
                      selectedCategoryOptions={selectedCategoryOptions}
                      handleSortSelection={handleSortSelection}
                      togglePopUp={togglePopUp}
                      applyFilters={applyFilters}
                      resetFilters={resetFilters}
                      openCategoryPopup={() => {
                        setIsPopUpOpen(false);
                        setIsCategoryPopupOpen(true);
                      }}
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
                    onClick={() => {
                      setIsCategoryPopupOpen(false);
                      setIsPopUpOpen(true);
                    }}
                  >
                    <CategoryPopup
                      selectedCategoryOptions={selectedCategoryOptions}
                      handleCategorySelection={handleCategorySelection}
                      categoryOptions={categoryOptions}
                      closeCategoryPopup={() => {
                        setIsCategoryPopupOpen(false);
                        setIsPopUpOpen(true);
                      }}
                    />
                  </Overlay>
                )}
              </AnimatePresence>
            </>
          ) : (
            <NoTransactionMain>
              <NoTransactionsComponent />
            </NoTransactionMain>
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
