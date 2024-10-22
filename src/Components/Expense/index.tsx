import { AnimatePresence, motion } from "framer-motion"
import { GenderButton, GenderContainer, GenderContents, GenderHeadingContainer, GenderIconContainer, InputField, ParaElement } from "../signup/signupstyled"
import { BackIconContainer, ExpenseBottomContainer, ExpenseBottomSubContainer, ExpenseContainer, 
    ExpenseHeader, ExpenseHeading, ExpenseSubContainer, CategoryContents, DescriptionField, 
    ContinueButton, CategoryParaElement, InputContainer,
    CategoryButton, InputExpense,
    InputHeading} from "./styledComponents"
import { useState } from "react";
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

const categories = ["Shopping", "Transportation", "Food", "Groceries", "Others", "Medical"]

const ExpenseComponent = ()=>{
    const { handleBack } = NavigationEvents();


    const [genderContents, setGenderContents] = useState(false);
    const [gender, setGender] = useState("Category");

    const [selectedCategory, setSelectedCategory] = useState<String[]>([])

    const openGenderDropDown = () => {
        setGenderContents(!genderContents);
      };

      const handleCategoryChange = (category: string)=>{
            setGender(category)
            if(selectedCategory.includes(category)){
                const filteredArr = selectedCategory.filter(eachItem => eachItem != category)
                setGender("Category")
                return setSelectedCategory(filteredArr)
            }

            // setGenderContents(false);
            return setSelectedCategory([category])
      }

    return(
        <ExpenseContainer>
            <ExpenseSubContainer>
                <ExpenseHeader>
                    <BackIconContainer onClick = {handleBack} size = {40}/>
                    <ExpenseHeading>Expense</ExpenseHeading>
                </ExpenseHeader>
                <InputContainer>
                    <InputHeading>How much?</InputHeading>
                    <InputExpense placeholder = "₹" type = "number" max = "1000"/>
                </InputContainer>
                <ExpenseBottomContainer>
                    <ExpenseBottomSubContainer>
                    <GenderContainer>
                    <GenderHeadingContainer onClick={openGenderDropDown}>
                        <CategoryParaElement category = {gender}>{gender}</CategoryParaElement>
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
                        {categories.map((eachItem)=>{
                            return <CategoryButton isselected = {selectedCategory.includes(eachItem)} onClick={()=> handleCategoryChange(eachItem)}>{eachItem}</CategoryButton>
                        })}
                    </CategoryContents>
                  </motion.div>
                )}
              </AnimatePresence>
                    </GenderContainer>
                    <DescriptionField placeholder = "Description" />
                    <ContinueButton>Continue</ContinueButton>
                    </ExpenseBottomSubContainer>
                </ExpenseBottomContainer>
            </ExpenseSubContainer>
        </ExpenseContainer>
    )
}

export default ExpenseComponent