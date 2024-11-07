import { NavigationEvents } from "../../Constants/EventHandlers";
import ExpensesItem from "../ExpensesItem";
import {
  BudgetInsideBottomContainer,
  BudgetMainContainer,
  BudgetSubBottomContainer,
  BudgetSubContainer,
  CreateBudgetButton,
  HeaderBudget,
  ItemCard,
  NoBudgetsHeading,
  UnderdevelopmentImage,
  UnderdevelopmentText,
} from "./styledComponents";

const Budget = () => {
  const {navigateToCreateBudget} = NavigationEvents()

  return (
    <BudgetMainContainer>
      <BudgetSubContainer>
            <HeaderBudget>
              <p>May</p>
            </HeaderBudget>
            <BudgetSubBottomContainer>
              <BudgetInsideBottomContainer>
              <ItemCard>
                  <ExpensesItem type="SHOPPING"
                  amount={"500"}
                  icon={"asfd"}
                  progress={70}
                  color="#FD3C4A"/>
              </ItemCard>
              <ItemCard>
                  <ExpensesItem type="SHOPPING"
                  amount={"500"}
                  icon={"asfd"}
                  progress={70}
                  color="#FD3C4A"/>
              </ItemCard>
              <ItemCard>
                  <ExpensesItem type="SHOPPING"
                  amount={"500"}
                  icon={"asfd"}
                  progress={70}
                  color="#FD3C4A"/>
              </ItemCard>
                  {/* <NoBudgetsHeading>You don’t have a budget. Let’s make one so you in control.</NoBudgetsHeading>
                  <CreateBudgetButton onClick = {navigateToCreateBudget}>Create a budget</CreateBudgetButton> */}
              </BudgetInsideBottomContainer>
              
              
            </BudgetSubBottomContainer>
      </BudgetSubContainer>
    </BudgetMainContainer>
  );
};

export default Budget;
