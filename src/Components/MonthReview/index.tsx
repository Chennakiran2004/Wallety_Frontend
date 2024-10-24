import React, { useState } from 'react';
import { ButtonContainer, ViewMoreButton, ViewMoreButtonImage } from "../SmartSpendingSuggestions/styledComponents";
import {
    MonthReviewContainer,
    MonthReviewSubContainer,
    MonthReviewMainContainer,
    MonthReviewTopContainer,
    MonthReviewHeading,
    MonthReviewItemsContainer,
    ItemContainerMonthReview,
    ItemSubContainerMonthReview,
    OverviewContainer,
    IconReview,
    ContentsAlignment,
    MonthReviewContainerHeading,
    MonthReviewContainerSubHeading,
    CategoryItemsMonthlyReview,
    CategoryItemReview,
    MoreContentsReview,
    TipsReviewSideHeading,
    UlElementReview,
    ListItemReview,
    ExpenseButtonContainer,
} from "./styledcomponent";

const MonthReview = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCard = (cardIndex: any) => {
        setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
    };

    return (
        <MonthReviewContainer>
            <MonthReviewSubContainer>
                <MonthReviewMainContainer>
                    <MonthReviewTopContainer>
                        <MonthReviewHeading>Monthly Spending Review</MonthReviewHeading>
                    </MonthReviewTopContainer>
                    <MonthReviewItemsContainer>
                        {[
                            {
                                title: "Congratulations! You're on Track!",
                                subTitle: "Keep up the great work, and remember to invest wisely to secure your financial future!",
                                categories: ["Food", "Shopping"],
                                tips: [
                                    "Mutual Funds: A low-risk option for growing your savings.",
                                    "Stock Market: If you’re willing to take a little more risk, stocks can offer higher returns.",
                                    "Retirement Funds: Start contributing to your future by boosting your retirement savings!"
                                ],
                            },
                            {
                                title: "Heads Up! Higher Spending Alert!",
                                subTitle: "Watch out! You’ve spent more than the suggested amount in these areas:",
                                tips: [
                                    "Cut unnecessary expenses (e.g., dine out less, reduce online shopping).",
                                    "Find cheaper alternatives (e.g., discount stores).",
                                    "It’s easy to overspend in these categories, but reducing spending here can help you save more in the long run."
                                ],
                            },
                            {
                                title: "Congratulations! You're on Track!",
                                subTitle: "Keep up the great work, and remember to invest wisely to secure your financial future!",
                                categories: ["Food", "Shopping"],
                            },
                        ].map((card, index) => (
                            <ItemContainerMonthReview key={index} isOpen={expandedCard === index}>
                                <ItemSubContainerMonthReview>
                                    <OverviewContainer>
                                        <div>
                                            <IconReview src={index === 1 ? "/Images/warninglogo.svg" : "/Images/calendaricon.svg"} />
                                        </div>
                                        <ContentsAlignment>
                                            <MonthReviewContainerHeading>{card.title}</MonthReviewContainerHeading>
                                            <MonthReviewContainerSubHeading>{card.subTitle}</MonthReviewContainerSubHeading>
                                            {card.categories && (
                                                <CategoryItemsMonthlyReview>
                                                    {card.categories.map((category, catIndex) => (
                                                        <CategoryItemReview key={catIndex}>{category}</CategoryItemReview>
                                                    ))}
                                                </CategoryItemsMonthlyReview>
                                            )}
                                        </ContentsAlignment>
                                    </OverviewContainer>
                                    <MoreContentsReview>
                                        {expandedCard === index && card.tips && (
                                            <>
                                                <TipsReviewSideHeading>Pro Tip 🔑</TipsReviewSideHeading>
                                                <UlElementReview>
                                                    {card.tips.map((tip, tipIndex) => (
                                                        <ListItemReview key={tipIndex}>{tip}</ListItemReview>
                                                    ))}
                                                </UlElementReview>
                                            </>
                                        )}
                                        <ExpenseButtonContainer>
                                            <ViewMoreButton onClick={() => toggleCard(index)}>
                                                {expandedCard === index ? "View Less" : "View More"}
                                                <ViewMoreButtonImage
                                                    src="/Images/arrow down 2.svg"
                                                    alt="View more"
                                                    isExpanded={expandedCard === index}
                                                />
                                            </ViewMoreButton>
                                        </ExpenseButtonContainer>
                                    </MoreContentsReview>
                                </ItemSubContainerMonthReview>
                            </ItemContainerMonthReview>
                        ))}
                    </MonthReviewItemsContainer>
                </MonthReviewMainContainer>
            </MonthReviewSubContainer>
        </MonthReviewContainer>
    );
};

export default MonthReview;
