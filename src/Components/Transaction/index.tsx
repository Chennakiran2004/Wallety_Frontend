import { useState } from "react";
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

const data = [
  {
    date: "Today",
    details: [
      {
        id: 1,
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/shoppingicon.svg",
      },
      {
        id: 2,
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/foodicon.svg",
      },
      {
        id: 3,
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/transportation.svg",
      },
      {
        id: 4,
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
        id: 5,
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/foodicon.svg",
      },
      {
        id: 6,
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/transportation.svg",
      },
      {
        id: 7,
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/shoppingicon.svg",
      },
      {
        id: 8,
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

const sortOptions = ["Highest", "Lowest", "Oldest"];
const categoryOptions = ["Shopping", "Food", "Transport", "Entertainment"];

const Transaction = () => {
  const [isPopupOpen, setIsPopUpOpen] = useState(false);
  const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false);

  const [selectedSortOptions, setSelectedSortOptions] = useState<string[]>([]);
  const [selectedCategoryOptions, setSelectedCategoryOptions] = useState<
    string[]
  >([]);

  const [numberOfFilters, setNumberofFilters] = useState(0);

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
          <FinancialReportContainer>
            <FinancialReportHeading>
              See your financial report
            </FinancialReportHeading>
            <ArrowRight src="/Images/arrow-right-2.svg" />
          </FinancialReportContainer>
          <TransactionsContainer>
            {data.map((eachItem, index) => (
              <TransactionList
                key={index}
                date={eachItem.date}
                details={eachItem.details}
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
