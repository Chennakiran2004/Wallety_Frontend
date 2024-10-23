import React from "react";
import {
  RecentTransactionItemContainer,
  RecentTransactionItemDescription,
  RecentTransactionItemDescriptionContainer,
  RecentTransactionItemImage,
  RecentTransactionItemPrice,
  RecentTransactionItemPriceAndTime,
  RecentTransactionItemText,
  RecentTransactionItemType,
} from "./styledComponents";
import { CategoriesMap } from "../../Constants/EventHandlers";

// Define the props interface
interface TransactionItemProps {
  type: string;
  description: string;
  price: string;
  time: string;
}

const RecenetTransactionItem: React.FC<TransactionItemProps> = ({type,description,price,time,}) => {
  const imageUrl = CategoriesMap[type]
  return (
    <RecentTransactionItemContainer>
      <RecentTransactionItemImage src={imageUrl} />
      <RecentTransactionItemDescriptionContainer>
        <RecentTransactionItemText>
          <RecentTransactionItemType>{type}</RecentTransactionItemType>
          <RecentTransactionItemDescription>
            {description}
          </RecentTransactionItemDescription>
        </RecentTransactionItemText>
        <RecentTransactionItemPriceAndTime>
          <RecentTransactionItemPrice>-₹{price}</RecentTransactionItemPrice>
          <RecentTransactionItemDescription>
            {time}
          </RecentTransactionItemDescription>
        </RecentTransactionItemPriceAndTime>
      </RecentTransactionItemDescriptionContainer>
    </RecentTransactionItemContainer>
  );
};

export default RecenetTransactionItem;
