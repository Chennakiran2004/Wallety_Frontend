import { MonthDropDown } from "../FinancialReport/styledComponents";
import MyProgressBar from "../ProgressBar";
import {
  ExpenseItemContainer,
  ExpensesItemTextContainer,
  ExpensesType,
  ExpensesTypeText,
  ExpensesMoney,
} from "./styledComponents";

interface ExpensesItemProps {
  type: string;
  amount: string;
  icon: string;
  progress: number;
  color: string;
}

const ExpensesItem: React.FC<ExpensesItemProps> = ({
  type,
  amount,
  icon,
  progress,
  color,
}) => {
  return (
    <ExpenseItemContainer>
      <ExpensesItemTextContainer>
        <MonthDropDown>
          <ExpensesType src={icon} />
          <ExpensesTypeText>{type}</ExpensesTypeText>
        </MonthDropDown>
        <ExpensesMoney>{amount}</ExpensesMoney>
      </ExpensesItemTextContainer>
      <MyProgressBar progress={progress} color={color} />
    </ExpenseItemContainer>
  );
};

export default ExpensesItem;
