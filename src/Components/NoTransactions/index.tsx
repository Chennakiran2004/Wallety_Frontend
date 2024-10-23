import { NoTransactionsContainer, NoTransactionsHeading } from "./styledcomponents"

const NoTransactionsComponent = ()=>{
    return(
        <NoTransactionsContainer>
            <NoTransactionsHeading>No Transactions Found</NoTransactionsHeading>
            <button>Add Transaction</button>
        </NoTransactionsContainer>
        
    )
}

export default NoTransactionsComponent