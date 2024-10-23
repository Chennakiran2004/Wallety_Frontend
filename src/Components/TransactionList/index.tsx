import { DateHeading, TransactionListContainer } from "../Transaction/styledComponents";
import TransactionItem from "../TransactionItem";

interface TransactionListProps{
    date: string
    details: DetailsInterface[]
}


  interface DetailsInterface{
    id: string,
    name: string
    money: string
    description: string
    time: string
    imageUrl: string
  }

const TransactionList: React.FC<TransactionListProps> = ({date, details})=>{
    return (
        <>
          <DateHeading>{date}</DateHeading>
          <TransactionListContainer>
            {details.map((item, index) => (
              <TransactionItem key={index} item={item} />
            ))}
          </TransactionListContainer>
        </>
      );
}

export default TransactionList