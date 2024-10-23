import { AnimatePresence, motion } from "framer-motion"
import { GenderButton, GenderContainer, GenderContents, GenderHeadingContainer, GenderIconContainer, InputField, ParaElement } from "../signup/signupstyled"
import { BackIconContainer, ExpenseBottomContainer, ExpenseBottomSubContainer, ExpenseContainer, 
    ExpenseHeader, ExpenseHeading, ExpenseSubContainer, CategoryContents, DescriptionField, 
    ContinueButton, CategoryParaElement, InputContainer,
    CategoryButton, InputExpense,
    InputHeading} from "./styledComponents"
import { useState } from "react";
import { ChangingTokens, NavigationEvents, url } from "../../Constants/EventHandlers";
import axios from "axios";

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

const categories = ["Food", "Entertainment", "Travel", "Health", "Miscellaneous", "Rent", "Savings", "Shopping"]

const ExpenseComponent = ()=>{
    const { handleBack } = NavigationEvents();
    const {accessToken} = ChangingTokens();

    const [amount, setAmount] = useState("0")
    const [genderContents, setGenderContents] = useState(false);
    const [gender, setGender] = useState("Category");
    const [description, setDescription] = useState("")

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

      const expenseAdd = ()=>{
        const fetching = async()=>{
          try{
            const response = await axios.post(`${url}//update_user_expense`, {
            "category": selectedCategory[0],
            "expense_amount": amount,
            "description": description
          }, {
            headers: {
              "Authorization": `Bearer ${accessToken}`,
              "Content-type": "Application/json"
            },
          });
          console.log(response)
          }catch(err: any){
            if(err.response){
              if(err.response.data.error_message){
                  console.log("Insuffiecient Amount")
              }
            }
          }
        }

        fetching()
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
                    <InputExpense placeholder = "₹" type = "number" onChange = {(e)=> setAmount(e.target.value)} max = "1000"/>
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
                    <DescriptionField onChange = {(e)=> setDescription(e.target.value)} value = {description} placeholder = "Description" />
                    <ContinueButton onClick = {expenseAdd}>Continue</ContinueButton>
                    </ExpenseBottomSubContainer>
                </ExpenseBottomContainer>
            </ExpenseSubContainer>
        </ExpenseContainer>
    )
}

export default ExpenseComponent