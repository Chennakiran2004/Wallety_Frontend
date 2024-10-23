import { MonthReviewContainer, MonthReviewSubContainer,MonthReviewMainContainer,
    MonthReviewTopContainer,
    MonthReviewHeading,
    MonthReviewItemsContainer, ItemContainerMonthReview,
    MonthReviewBottomContainer,
    ItemSubContainerMonthReview, OverviewContainer,
    IconReview,
    ContentsAlignment,
    MonthReviewContainerHeading,
    MonthReviewContainerSubHeading,
    CategoryItemsMonthlyReview,
    CategoryItemReview,
    MoreContentsReview,
    TipsReviewSideHeading, UlElementReview, ListItemReview,
    TipsHeadingContainer, SideIcon
 } from "./styledcomponent"

const MonthReview = ()=>{
    return(
        <MonthReviewContainer>
            <MonthReviewSubContainer>
                <MonthReviewMainContainer>
                    <MonthReviewTopContainer>
                        <MonthReviewHeading>Monthly Spending Review</MonthReviewHeading>
                    </MonthReviewTopContainer>
                    <MonthReviewItemsContainer>
                        <ItemContainerMonthReview>
                            <ItemSubContainerMonthReview>
                                <OverviewContainer>
                                    <div>
                                        <IconReview src = "/Images/calendaricon.svg"/>
                                    </div>
                                    <ContentsAlignment>
                                        <MonthReviewContainerHeading>Congratulations! You're on Track!</MonthReviewContainerHeading>
                                        <MonthReviewContainerSubHeading>Keep up the great work, and remember to invest wisely to secure your financial future!</MonthReviewContainerSubHeading>
                                        <CategoryItemsMonthlyReview>
                                            <CategoryItemReview>Food</CategoryItemReview>
                                            <CategoryItemReview>Shopping</CategoryItemReview>
                                        </CategoryItemsMonthlyReview>
                                    </ContentsAlignment>
                                </OverviewContainer>
                                <MoreContentsReview>
                                    <TipsReviewSideHeading>Pro Tip 🔑</TipsReviewSideHeading>
                                    <UlElementReview>
                                        <ListItemReview>Mutual Funds: A low-risk option for growing your savings.</ListItemReview>
                                        <ListItemReview>Stock Market: If you’re willing to take a little more risk, stocks can offer higher returns.</ListItemReview>
                                        <ListItemReview>Retirement Funds: Start contributing to your future by boosting your retirement savings!</ListItemReview>
                                    </UlElementReview>
                                </MoreContentsReview>
                            </ItemSubContainerMonthReview>
                        </ItemContainerMonthReview>
                        <ItemContainerMonthReview>
                            <ItemSubContainerMonthReview>
                                <OverviewContainer>
                                    <div>
                                        <IconReview src = "/Images/warninglogo.svg"/>
                                    </div>
                                    <ContentsAlignment>
                                        <MonthReviewContainerHeading>Heads Up! Higher Spending Alert!</MonthReviewContainerHeading>
                                        <MonthReviewContainerSubHeading>Watch out! You’ve spent more than the suggested amount in these areas:</MonthReviewContainerSubHeading>
                                    </ContentsAlignment>
                                </OverviewContainer>
                                <MoreContentsReview>
                                    <TipsHeadingContainer>
                                        <TipsReviewSideHeading>Quick Fixes</TipsReviewSideHeading>
                                        <SideIcon src = "/Images/tipstosaveicon.svg"/>
                                    </TipsHeadingContainer>
                                    <UlElementReview>
                                        <ListItemReview>Cut unnecessary expenses (e.g., dine out less, reduce online shopping).</ListItemReview>
                                        <ListItemReview>Find cheaper alternatives (e.g., discount stores).</ListItemReview>
                                        <ListItemReview>It’s easy to overspend in these categories, but reducing spending here can help you save more in the long run.</ListItemReview>
                                    </UlElementReview>
                                </MoreContentsReview>
                                <MoreContentsReview>
                                    <TipsHeadingContainer>
                                        <TipsReviewSideHeading>Quick Fixes</TipsReviewSideHeading>
                                        <SideIcon src = "/Images/quickfixesicon.svg"/>
                                    </TipsHeadingContainer>
                                    <UlElementReview>
                                        <ListItemReview>Cut back on unnecessary expenses (e.g., reduce dining out or online shopping).</ListItemReview>
                                        <ListItemReview>Look for cheaper alternatives (e.g., discount stores, subscriptions, or sharing services).</ListItemReview>
                                    </UlElementReview>
                                </MoreContentsReview>
                                <MoreContentsReview>
                                    <TipsReviewSideHeading>💡 Let’s Adjust!</TipsReviewSideHeading>
                                </MoreContentsReview>
                                <MoreContentsReview>
                                    <TipsHeadingContainer>
                                        <TipsReviewSideHeading>Budget Check</TipsReviewSideHeading>
                                        <SideIcon src = "/Images/budgetcheckicon.svg"/>
                                    </TipsHeadingContainer>
                                    <UlElementReview>
                                        <ListItemReview>Set smaller weekly goals.</ListItemReview>
                                        <ListItemReview>Track daily expenses.</ListItemReview>
                                        <ListItemReview>Automate your savings for easier discipline.</ListItemReview>
                                    </UlElementReview>
                                </MoreContentsReview>
                            </ItemSubContainerMonthReview>
                        </ItemContainerMonthReview>
                        <ItemContainerMonthReview>
                            <ItemSubContainerMonthReview>
                                <OverviewContainer>
                                    <div>
                                        <IconReview src = "/Images/calendaricon.svg"/>
                                    </div>
                                    <ContentsAlignment>
                                        <MonthReviewContainerHeading>Congratulations! You're on Track!</MonthReviewContainerHeading>
                                        <MonthReviewContainerSubHeading>Keep up the great work, and remember to invest wisely to secure your financial future!</MonthReviewContainerSubHeading>
                                        <CategoryItemsMonthlyReview>
                                            <CategoryItemReview>Food</CategoryItemReview>
                                            <CategoryItemReview>Shopping</CategoryItemReview>
                                        </CategoryItemsMonthlyReview>
                                    </ContentsAlignment>
                                </OverviewContainer>
                            </ItemSubContainerMonthReview>
                        </ItemContainerMonthReview>
                    </MonthReviewItemsContainer>                    
                </MonthReviewMainContainer>
            </MonthReviewSubContainer>
        </MonthReviewContainer>
    )
}

export default MonthReview


// 🔑 Pro Tip: With the extra savings, you could consider investing in:
// 📈 Mutual Funds: A low-risk option for growing your savings.
// 💼 Stock Market: If you’re willing to take a little more risk, stocks can offer higher returns.
// 🔄 Retirement Funds: Start contributing to your future by boosting your retirement savings!