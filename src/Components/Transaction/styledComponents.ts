import styled from "styled-components";
import { interMedium, interRegular, interSemiBold } from "../../Constants/fontStyles";
import { motion } from "framer-motion";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";


export const TransactionMainContainer = styled.div`
    width: 100vw;
`;

export const TransactionSubContainer = styled.div`
    padding-top: 8%;
    padding-bottom: 8%;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FilterImage = styled.img``

export const ArrowRight = styled.img``

export const FilterButton = styled.button`
    border: none;
    outline: none;
    background: transparent;
    position: relative;
`

export const FinancialReportContainer = styled.div`
    background-color: #EEE5FF;
    border-radius: 8px;
    padding: 12px 8px 12px 16px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const FinancialReportHeading = styled.p`
    color: #7F3DFF;
    font-size: 16px;
    ${interRegular}
`

export const TransactionListContainer = styled.ul`
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 16px;
`

export const ListItem = styled.li`
    width: 90%;
    margin: auto;
    list-style-type: none;
    display: flex;
    gap: 16px;
    align-items: center;
`

export const TransactionsContainer = styled.div`
    max-height: 68vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const ListItemContentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 16px;
`

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const DateHeading = styled.p`
    ${interSemiBold}
    font-size: 20px;
    margin-bottom: 8px;
`

export const CategoryHeading = styled.p`
    ${interMedium}
    font-size: 16px;
`

export const PriceHeading = styled.p`
    ${interMedium}
    font-size: 16px;
    color: #FD3C4A;
`

export const DescriptionHeading = styled.p`
    ${interMedium}
    font-size: 14px;
    color: #91919F;
`

export const TimeElement = styled.p`
    ${interMedium}
    font-size: 14px;
    color: #91919F;
`

export const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
`

export const PopupContainer = styled(motion.div)`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: white;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    z-index: 1000;
    padding-bottom: 6%;
    padding-top: 8%;
`;

export const PopUpSubContainer = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const FilterPopUpHeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FilterPopUpHeading = styled.p`
    ${interSemiBold}
    font-size: 20px;
`

export const ResetButton = styled.button`
    background-color: #EEE5FF;
    border-radius: 40px;
    border: none;
    padding: 8px 16px 8px 16px;
    color: #7F3DFF;
    ${interMedium}
    font-size: 14px;
`

export const SortByContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const PopUpSubHeading = styled.p`
    ${interSemiBold}
    font-size: 20px;
`

export const SortByItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

interface SortItemInterface{
    isselected: boolean
}

export const SortItem = styled.div<SortItemInterface>`
    border: #E3E5E5 solid 1px;
    padding: 12px 20px 12px 20px;
    border-radius: 24px;
    ${interMedium}
    font-size: 14px;
    background-color: ${({isselected})=> isselected ? "#7F3DFF": "transparent"};
    color: ${({isselected})=> isselected ? "white": "black"}
`

export const CategoryContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`

export const CategoryButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CategorySideHeading = styled.p`
    ${interMedium}
    font-size: 16px;

`

export const CategoryItemSelectedContainer = styled.div`
    display: flex;
    align-items: center;
`

export const NumberOfItemsSelected = styled.p`
    ${interMedium}
    font-size: 16px;
    color: #91919F;
`

export const ApplyButton = styled(GlobalButton1)`
    margin-top: 8px;
`

export const NumberOfFiltersContainer = styled.div`
    background-color: #7F3DFF;
    color: white;
    border-radius: 20px;
    text-align:center;
    height: 24px;
    width: 24px;
    position: absolute;
    right: 10px;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items:center;
`

export const NumberOfFilters = styled.span``

export const CategoryPopupContainer = styled(motion.div)`
    position: fixed;
    bottom: 0;
    width: 100%;
    background: white;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    z-index: 1000;
    padding-bottom: 6%;
    padding-top: 8%;
`

export const CategoryItemsContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap: 8px;
`

export const CategoryItem = styled.button`
    width: fit-content;
`