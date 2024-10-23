import { NavigationEvents } from "../../Constants/EventHandlers";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";
import {
  ButtonContainer,
  LetsGoContainer,
  SmartSpendingCardsContainer,
  SmartSpendingContentTextContainer,
  SmartSpendingIcon,
  SmartSpendingItemCard,
  SmartSpendingItemContentContainer,
  SmartSpendingSuggestionsHeading,
  SmartSpendingSuggestionsMainContainer,
  SmartSpendingSuggestionsSubContainer,
  SmartSpendingType,
  Suggestion,
  ViewMoreButton,
} from "./styledComponents";

const SmartSpendingSuggestions = () => {
  const { naviagteToYouAreAllSet } = NavigationEvents();

  return (
    <SmartSpendingSuggestionsMainContainer>
      <SmartSpendingSuggestionsSubContainer>
        <SmartSpendingSuggestionsHeading>
          Smart Spending Suggestions Based on Your Salary
        </SmartSpendingSuggestionsHeading>
        <SmartSpendingCardsContainer>
          <SmartSpendingItemCard>
            <SmartSpendingItemContentContainer>
              <SmartSpendingIcon src="/Images/transportationicon1.svg" />
              <SmartSpendingContentTextContainer>
                <SmartSpendingType>Transportation</SmartSpendingType>
                <SmartSpendingType>
                  Suggestion: <Suggestion>10% of your Salary.</Suggestion>
                </SmartSpendingType>
              </SmartSpendingContentTextContainer>
            </SmartSpendingItemContentContainer>
            <ButtonContainer>
              <ViewMoreButton>
                View More <SmartSpendingIcon src="/Images/viewmore.svg" />
              </ViewMoreButton>
            </ButtonContainer>
          </SmartSpendingItemCard>

          <SmartSpendingItemCard>
            <SmartSpendingItemContentContainer>
              <SmartSpendingIcon src="/Images/transportationicon1.svg" />
              <SmartSpendingContentTextContainer>
                <SmartSpendingType>Transportation</SmartSpendingType>
                <SmartSpendingType>
                  Suggestion: <Suggestion>10% of your Salary.</Suggestion>
                </SmartSpendingType>
              </SmartSpendingContentTextContainer>
            </SmartSpendingItemContentContainer>
            <ButtonContainer>
              <ViewMoreButton>
                View More <SmartSpendingIcon src="/Images/viewmore.svg" />
              </ViewMoreButton>
            </ButtonContainer>
          </SmartSpendingItemCard>
        </SmartSpendingCardsContainer>

        <LetsGoContainer>
          <GlobalButton1 onClick={naviagteToYouAreAllSet}>
            Let's Go
          </GlobalButton1>
        </LetsGoContainer>
      </SmartSpendingSuggestionsSubContainer>
    </SmartSpendingSuggestionsMainContainer>
  );
};

export default SmartSpendingSuggestions;
