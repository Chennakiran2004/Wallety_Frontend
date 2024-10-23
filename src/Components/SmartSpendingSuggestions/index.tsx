import axios from "axios";
import {
  ChangingTokens,
  NavigationEvents,
} from "../../Constants/EventHandlers";
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

import { url } from "../../Constants/EventHandlers";
import { useState } from "react";
import { useEffect } from "react";

interface UserSpendingSuggestions {
  salary: number;
  rent: number;
  food: number;
  shopping: number;
  travelling: number;
  health: number;
  entertainment: number;
  savings: number;
  miscellaneous: number;
  city: string;
  gender: string;
  location: string;
  preference: string;
}
const SmartSpendingSuggestions = () => {
  const { naviagteToYouAreAllSet } = NavigationEvents();

  const [spendingData, setSpendingData] =
    useState<UserSpendingSuggestions | null>();

  const { accessToken } = ChangingTokens();

  // const fetchingData = async () => {
  //   try {
  //     const response = await axios.post(
  //       `${url}/get_user_expense_suggestions/`,
  //       {},
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //           "Content-type": "Application/json",
  //         },
  //       }
  //     );

  //     console.log(response.data);
  //     // setSpendingData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // fetchingData();

  const fetchingData = async () => {
    try {
      const response = await axios.post(
        `${url}/get_user_expense_suggestions/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "Application/json",
          },
        }
      );
      setSpendingData(response.data); // Store the data in state
      console.log(response.data); // Optional: Log the response for debugging
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(spendingData);

  // Fetch data only when component mounts
  useEffect(() => {
    fetchingData();
  }, []); // Empty dependency array to ensure it runs only once

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
                <SmartSpendingType>Rent</SmartSpendingType>
                <SmartSpendingType>
                  Suggestion:{" "}
                  <Suggestion>
                    {spendingData?.rent} of your Salary
                    {spendingData?.salary}.
                  </Suggestion>
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
                <SmartSpendingType>Food</SmartSpendingType>
                <SmartSpendingType>
                  Suggestion:{" "}
                  <Suggestion>
                    {spendingData?.food} of your Salary
                    {spendingData?.salary}.
                  </Suggestion>
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
                <SmartSpendingType>Shopping</SmartSpendingType>
                <SmartSpendingType>
                  Suggestion:{" "}
                  <Suggestion>
                    {spendingData?.shopping} of your Salary
                    {spendingData?.salary}.
                  </Suggestion>
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
                <SmartSpendingType>Travelling</SmartSpendingType>
                <SmartSpendingType>
                  Suggestion:{" "}
                  <Suggestion>
                    {spendingData?.travelling} of your Salary
                    {spendingData?.salary}.
                  </Suggestion>
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
                <SmartSpendingType>Health</SmartSpendingType>
                <SmartSpendingType>
                  Suggestion:{" "}
                  <Suggestion>
                    {spendingData?.health} of your Salary
                    {spendingData?.salary}.
                  </Suggestion>
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
                <SmartSpendingType>Entertainment</SmartSpendingType>
                <SmartSpendingType>
                  Suggestion:{" "}
                  <Suggestion>
                    {spendingData?.entertainment} of your Salary
                    {spendingData?.salary}.
                  </Suggestion>
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
                <SmartSpendingType>Savings</SmartSpendingType>
                <SmartSpendingType>
                  Suggestion:{" "}
                  <Suggestion>
                    {spendingData?.savings} of your Salary
                    {spendingData?.salary}.
                  </Suggestion>
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
                <SmartSpendingType>Miscellaneous</SmartSpendingType>
                <SmartSpendingType>
                  Suggestion:{" "}
                  <Suggestion>
                    {spendingData?.miscellaneous} of your Salary
                    {spendingData?.salary}.
                  </Suggestion>
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
