import { AnimatePresence, motion } from "framer-motion";
import { BackIconContainerBudget, BottomContainer, BottomSubContainer, BudgetAmount, BudgetInput, BudgetRupee, BudgetRupeeContainer, ContinueBottom, CreateBudgetHeading, CreateBudgetMainContainer, CreateBudgetSubContainer, EnterMoneyContainer, HeaderContaier, HowMuchHeading, MainBottomContainer, MainBottomSubContainer, ReceiveAlert, ReceiveAlertTextContainer, ReceiveHeading, ReceiveSubHeading } from "./styledComponents"
import { useEffect, useRef, useState } from "react";
import { BackIconContainer, CategoryButton, CategoryContents, CategoryParaElement, DescriptionField, RupeesSymbolExpense } from "../Expense/styledComponents";
import { GenderContainer, GenderHeadingContainer, GenderIconContainer } from "../signup/signupstyled";
import Switch from "../Switch";
import RangeSlider from "../RangeSlider";
import { NavigationEvents } from "../../Constants/EventHandlers";


const dropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.1,
      },
    },
  };
  
  const categories = [
    "Food",
    "Entertainment",
    "Travel",
    "Health",
    "Miscellaneous",
    "Rent",
    "Savings",
    "Shopping",
  ];

const CreateBudget = ()=>{
    const [genderContents, setGenderContents] = useState(false);
  const [gender, setGender] = useState("Category");
  const [selectedCategory, setSelectedCategory] = useState<String[]>([]);
  const [toggle, setToggle] = useState(false);
  const amountInputRef = useRef<HTMLInputElement>(null);
  const [amount, setAmount] = useState("");

  const {handleBack} = NavigationEvents()

  const handleCategoryChange = (category: string) => {
    setGender(category);
    if (selectedCategory.includes(category)) {
      const filteredArr = selectedCategory.filter(
        (eachItem) => eachItem != category
      );
      setGender("Category");
      return setSelectedCategory(filteredArr);
    }
    setGenderContents(false);
    return setSelectedCategory([category]);
  };

  const openGenderDropDown = () => {
    setGenderContents(!genderContents);
  };

  const switchToggle = (val: boolean)=>{
    setToggle(val)
  }


  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length <= 10) {
      setAmount(value);
    }
  };

  const preventInvalidInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "-" || e.key === "e" || e.key === "E") {
      e.preventDefault(); // Prevent entering "-" or exponential notation
    }
  };

  useEffect(() => {
    if (amountInputRef.current) {
      amountInputRef.current.focus();
    }
  }, []);

    return(
        <CreateBudgetMainContainer>
            <CreateBudgetSubContainer>
                <HeaderContaier>
                    <BackIconContainerBudget onClick={handleBack} size={40}/>
                    <CreateBudgetHeading>Create Budget</CreateBudgetHeading>
                </HeaderContaier>
                <BottomContainer>
                    <BottomSubContainer>
                        <EnterMoneyContainer>
                            <HowMuchHeading>How much do you want to spend?</HowMuchHeading>
                            <BudgetRupeeContainer>
                                <BudgetRupee>₹</BudgetRupee>
                                <BudgetInput type="number" ref={amountInputRef} value={amount} onChange={handleAmountChange} onKeyDown={preventInvalidInput} min="0"/>
                            </BudgetRupeeContainer>
                        </EnterMoneyContainer>
                        <MainBottomContainer>
                            <MainBottomSubContainer>
                                <GenderContainer>
                <GenderHeadingContainer onClick={openGenderDropDown}>
                    <CategoryParaElement category={gender}>
                    {gender}
                    </CategoryParaElement>
                    <GenderIconContainer size={24} isactive={genderContents} />
                </GenderHeadingContainer>
                <AnimatePresence mode="wait">
                    {genderContents && (
                    <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate={genderContents ? "visible" : "hidden"}
                        exit="exit"
                    >
                        <CategoryContents>
                        {categories.map((eachItem) => {
                            return (
                            <CategoryButton
                                isSelected={selectedCategory.includes(eachItem)}
                                onClick={() => {
                                handleCategoryChange(eachItem);
                                }}
                            >
                                {eachItem}
                            </CategoryButton>
                            );
                        })}
                        </CategoryContents>
                    </motion.div>
                    )}
                </AnimatePresence>
                                </GenderContainer>
                                <ReceiveAlert>
                                    <ReceiveAlertTextContainer>
                                        <ReceiveHeading>Receive Alert</ReceiveHeading>
                                        <ReceiveSubHeading>Receive alert when it reaches some point.</ReceiveSubHeading>
                                    </ReceiveAlertTextContainer>
                                    <Switch onToggle = {switchToggle}/>
                                </ReceiveAlert>
                                {toggle && <RangeSlider/>}
                                <ContinueBottom>Continue</ContinueBottom>
                            </MainBottomSubContainer>
                        </MainBottomContainer>
                    </BottomSubContainer>
                </BottomContainer>
            </CreateBudgetSubContainer>
        </CreateBudgetMainContainer>
    )
}

export default CreateBudget