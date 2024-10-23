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
import { ChangingTokens, NavigationEvents, url } from "../../Constants/EventHandlers";
import axios from "axios";

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

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const mainPopupExit = {
  hidden: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

interface TransactionItem{
  category: string;
  amount: string;
  time: string;
  transaction_id: string;
  description: string;
}

interface Transaction {
  date: string,
  transactions: TransactionItem[]
}

const sortOptions = ["Highest", "Lowest", "Oldest"];
const categoryOptions = ["Shopping", "Food", "Transport", "Entertainment"];

const Transaction = () => {
  const [transactionsArr, setTransactionsArr] = useState<Transaction[] >([])

  const [isPopupOpen, setIsPopUpOpen] = useState(false);
  const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false);

  const [selectedSortOptions, setSelectedSortOptions] = useState<string[]>([]);
  const [selectedCategoryOptions, setSelectedCategoryOptions] = useState<
    string[]
  >([]);

  const {accessToken} = ChangingTokens()

  const [numberOfFilters, setNumberofFilters] = useState(0);

  const { navigateToFinancialReport } = NavigationEvents();

  const handleSortSelection = (option: string) => {
    if (option === selectedSortOptions[0]) {
      return setSelectedSortOptions([]);
    }
    setSelectedSortOptions([option]);
  };

  const handleCategorySelection = (option: string) => {
    if (selectedCategoryOptions.includes(option)) {
      const filteredArr = selectedCategoryOptions.filter((eachItem) => {
        return option != eachItem;
      });

      setSelectedCategoryOptions(filteredArr);
    } else {
      setSelectedCategoryOptions([option, ...selectedCategoryOptions]);
    }
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

  const applyFilters = () => {
    const count = selectedSortOptions.length;
    const countB = selectedCategoryOptions.length > 0 ? 1 : 0;
    setNumberofFilters(count + countB);
    togglePopUp();
  };

  const resetFilters = () => {
    setSelectedSortOptions([]);
    setSelectedCategoryOptions([]);
  };

  useEffect(()=>{

    const fetching = async()=>{
      try {
        const response = await axios.post(`${url}/get_last_all_transactions/`, {}, {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-type": "Application/json"
          },
        });
    
        setTransactionsArr(response.data.transactions_by_date)
      } catch (err) {
        console.log(err);
      }
    }

    fetching()
  }, [])

  return (
    <>
      <TransactionMainContainer>
        <TransactionSubContainer>
          <FilterContainer>
            <p>Month</p>
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
        </TransactionSubContainer>
      </TransactionMainContainer>
    </>
  );
};

export default Transaction;
