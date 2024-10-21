import { useState } from 'react';
import TabBar from '../TabBar';
import {TransactionMainContainer, 
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
  DateHeading, CategoryHeading, PriceHeading, DescriptionHeading, TimeElement,
  Overlay,
  PopupContainer, PopUpSubContainer, FilterPopUpHeadingContainer, ResetButton,
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
  ApplyButton, NumberOfFilters,
  NumberOfFiltersContainer,
  CategoryPopupContainer} from './styledComponents'
import { motion, AnimatePresence } from 'framer-motion';


const data = [
  {
    date: "Today",
    details: [
      {
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/shoppingicon.svg"
      }, {
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/foodicon.svg"
      }, {
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/transportation.svg"
      },{
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/shoppingicon.svg"
      }
    ]
  }, {
    date: "Yesterday",
    details: [
      {
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/foodicon.svg"
      }, {
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/transportation.svg"
      }, {
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/shoppingicon.svg"
      },{
        name: "Shopping",
        money: "120",
        description: "Buy Some grocerry",
        time: "10:00 AM",
        imageUrl: "/Images/transportation.svg"
      }
    ]
  }, 
]

const popupVariants = {
  hidden: { opacity: 0, y: '100%' },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: '100%' },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const mainPopupExit = {
  hidden: { x: 0, opacity: 1 },
  exit: { x: '-100%', opacity: 0 },
};

// Animation for sliding the category popup in from the right
const categoryPopupVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: '100%', opacity: 0 },
};

const sortOptions = ["Highest", "Lowest", "Oldest"];
const categoryOptions = ["Shopping", "Food", "Transport", "Entertainment"];

const Transaction = () => {
  const [isPopupOpen, setIsPopUpOpen] = useState(false)
  const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false);

  const [selectedSortOptions, setSelectedSortOptions] = useState<String[]>([]);
  const [numberOfFilters, setNumberofFilters] = useState(0)

  const handleSortSelection = (option: string) => {
    if(option === selectedSortOptions[0]){
      return setSelectedSortOptions([])
    }
    setSelectedSortOptions([option])
  };

  const togglePopUp = ()=> {
    setIsPopUpOpen(!isPopupOpen)
  }

  const openCategoryPopup = () => {
    setIsPopUpOpen(false);
    setIsCategoryPopupOpen(true); 
  };

  const closeCategoryPopup = () => {
    setIsCategoryPopupOpen(false);
    setIsPopUpOpen(true); 
  };

  const applyFilters = ()=>{
    const count = selectedSortOptions.length
    setNumberofFilters(count)
    togglePopUp()
  }

  const resetFilters = ()=>{
    setSelectedSortOptions([])
  }

  return (
    <>
    <TransactionMainContainer>
       <TransactionSubContainer>
          <FilterContainer>
            <p>Month</p>
            <FilterButton onClick = {togglePopUp}>
              <FilterImage src = "/Images/filtericon.svg"/>
              {numberOfFilters > 0 && (
                <NumberOfFiltersContainer>
                    <NumberOfFilters>{numberOfFilters}</NumberOfFilters>
                </NumberOfFiltersContainer>
              )}
            </FilterButton>
          </FilterContainer>
          <FinancialReportContainer>
            <FinancialReportHeading>See your financial report</FinancialReportHeading>
            <ArrowRight src = "/Images/arrow-right-2.svg"/>
          </FinancialReportContainer>
          <TransactionsContainer>
            {data.map((eachItem)=>{
              return(
                <>
                <DateHeading>{eachItem.date}</DateHeading>
                <TransactionListContainer>
                  {eachItem.details.map((item)=>{
                    return (
                      <ListItem>
                        <img src = {item.imageUrl}/>
                        <ListItemContentsContainer>
                            <PriceContainer>
                               <CategoryHeading>Shopping</CategoryHeading>
                               <PriceHeading>-$120</PriceHeading>
                            </PriceContainer>
                            <DescriptionContainer>
                               <DescriptionHeading>Buy some grocery</DescriptionHeading>
                               <TimeElement>10:00 AM</TimeElement>
                            </DescriptionContainer>
                        </ListItemContentsContainer>
                      </ListItem>
                    )
                  })}
                </TransactionListContainer>
                </>
              )
            })}
          </TransactionsContainer>

          <AnimatePresence mode='wait'>
            {isPopupOpen && (
              <Overlay variants={overlayVariants} initial="hidden" animate="visible" exit="exit">
                <PopupContainer onClick={(e)=> e.stopPropagation()} variants={popupVariants} initial="hidden" animate="visible" exit="exit">
                    <PopUpSubContainer>
                        <FilterPopUpHeadingContainer>
                            <FilterPopUpHeading>Filter Transaction</FilterPopUpHeading>
                            <ResetButton onClick = {resetFilters}>Reset</ResetButton>
                        </FilterPopUpHeadingContainer>
                        <SortByContainer>
                            <PopUpSubHeading>Sort By</PopUpSubHeading>
                            <SortByItemsContainer>
                            {sortOptions.map((option) => (
                              <SortItem key={option} onClick={() => handleSortSelection(option)} style={{backgroundColor: selectedSortOptions.includes(option)? '#d3d3d3': 'transparent',}}>{option}</SortItem>
                            ))}
                            </SortByItemsContainer>
                        </SortByContainer>
                        <CategoryContainer>
                            <PopUpSubHeading>Category</PopUpSubHeading>
                            <CategoryButtonContainer onClick={openCategoryPopup}>
                              <CategorySideHeading>Choose Category</CategorySideHeading>
                              <CategoryItemSelectedContainer>
                                  <NumberOfItemsSelected>0 Selected</NumberOfItemsSelected>
                                  <ArrowRight src = "/Images/arrow-right-2.svg"/>
                              </CategoryItemSelectedContainer>
                            </CategoryButtonContainer>
                        </CategoryContainer>
                        <ApplyButton onClick = {applyFilters}>Apply</ApplyButton>
                    </PopUpSubContainer>
                </PopupContainer>
              </Overlay>
            )}

{/* {isCategoryPopupOpen && (
              <Overlay variants={overlayVariants} initial="hidden" animate="visible" exit="exit">
                <CategoryPopupContainer
                  onClick={(e) => e.stopPropagation()}
                  variants={categoryPopupVariants} // Slide in from right
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <FilterPopUpHeading>Choose Category</FilterPopUpHeading>

                  {categoryOptions.map((category) => (
                    <SortItem key={category}>
                      {category}
                    </SortItem>
                  ))}

                  <ApplyButton onClick={closeCategoryPopup}>Done</ApplyButton>
                </CategoryPopupContainer>
              </Overlay>
            )} */}
          </AnimatePresence>
       </TransactionSubContainer>
    </TransactionMainContainer>
    <TabBar/>
    </>
  );
};

export default Transaction;
