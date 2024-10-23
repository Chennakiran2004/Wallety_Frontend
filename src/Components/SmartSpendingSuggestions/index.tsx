// import axios from "axios";
// import {
//   ChangingTokens,
//   NavigationEvents,
// } from "../../Constants/EventHandlers";
// import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";
// import {
//   ButtonContainer,
//   LetsGoContainer,
//   SmartSpendingCardsContainer,
//   SmartSpendingContentTextContainer,
//   SmartSpendingIcon,
//   SmartSpendingItemCard,
//   SmartSpendingItemContentContainer,
//   SmartSpendingSuggestionsHeading,
//   SmartSpendingSuggestionsMainContainer,
//   SmartSpendingSuggestionsSubContainer,
//   SmartSpendingType,
//   Suggestion,
//   ViewMoreButton,
// } from "./styledComponents";

// import { url } from "../../Constants/EventHandlers";
// import { useState, useEffect } from "react";

// interface UserSpendingSuggestions {
//   salary: number;
//   rent: number;
//   food: number;
//   shopping: number;
//   travelling: number;
//   health: number;
//   entertainment: number;
//   savings: number;
//   miscellaneous: number;
//   city: string;
//   gender: string;
//   location: string;
//   preference: string;
// }

// const SmartSpendingSuggestions = () => {
//   const { naviagteToYouAreAllSet } = NavigationEvents();

//   const [spendingData, setSpendingData] =
//     useState<UserSpendingSuggestions | null>(null);

//   const [expandedCard, setExpandedCard] = useState<string | null>(null);

//   const { accessToken } = ChangingTokens();

//   const fetchingData = async () => {
//     try {
//       const response = await axios.post(
//         `${url}/get_user_expense_suggestions/`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             "Content-type": "Application/json",
//           },
//         }
//       );
//       setSpendingData(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchingData();
//   });

//   const toggleCard = (cardType: string) => {
//     setExpandedCard((prev) => (prev === cardType ? null : cardType));
//   };

//   const renderCard = (type: string, value: number | undefined) => (
//     <SmartSpendingItemCard>
//       <SmartSpendingItemContentContainer>
//         <SmartSpendingIcon src="/Images/transportationicon1.svg" />
//         <SmartSpendingContentTextContainer>
//           <SmartSpendingType>{type}</SmartSpendingType>
//           <SmartSpendingType>
//             Suggestion:{" "}
//             <Suggestion>
//               {value} of your Salary&nbsp;
//               {spendingData?.salary}.
//             </Suggestion>
//           </SmartSpendingType>
//           {expandedCard === type && (
//             <div>
//               Additional details about {type}. For example, you can suggest how
//               much percentage or detailed breakdown of spending based on the
//               data.
//             </div>
//           )}
//         </SmartSpendingContentTextContainer>
//       </SmartSpendingItemContentContainer>
//       <ButtonContainer>
//         <ViewMoreButton onClick={() => toggleCard(type)}>
//           {expandedCard === type ? "View Less" : "View More"}{" "}
//           <SmartSpendingIcon src="/Images/viewmore.svg" />
//         </ViewMoreButton>
//       </ButtonContainer>
//     </SmartSpendingItemCard>
//   );

//   return (
//     <SmartSpendingSuggestionsMainContainer>
//       <SmartSpendingSuggestionsSubContainer>
//         <SmartSpendingSuggestionsHeading>
//           Smart Spending Suggestions Based on Your Salary
//         </SmartSpendingSuggestionsHeading>
//         <SmartSpendingCardsContainer>
//           {renderCard("Rent", spendingData?.rent)}
//           {renderCard("Food", spendingData?.food)}
//           {renderCard("Shopping", spendingData?.shopping)}
//           {renderCard("Travelling", spendingData?.travelling)}
//           {renderCard("Health", spendingData?.health)}
//           {renderCard("Entertainment", spendingData?.entertainment)}
//           {renderCard("Savings", spendingData?.savings)}
//           {renderCard("Miscellaneous", spendingData?.miscellaneous)}
//         </SmartSpendingCardsContainer>

//         <LetsGoContainer>
//           <GlobalButton1 onClick={naviagteToYouAreAllSet}>
//             Let's Go
//           </GlobalButton1>
//         </LetsGoContainer>
//       </SmartSpendingSuggestionsSubContainer>
//     </SmartSpendingSuggestionsMainContainer>
//   );
// };

// export default SmartSpendingSuggestions;

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
import { useState, useEffect } from "react";

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
    useState<UserSpendingSuggestions | null>(null);

  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const { accessToken } = ChangingTokens();

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
      setSpendingData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const toggleCard = (cardType: string) => {
    setExpandedCard((prev) => (prev === cardType ? null : cardType));
  };

  const renderCard = (type: string, value: number | undefined, tip: string) => (
    <SmartSpendingItemCard>
      <SmartSpendingItemContentContainer>
        <SmartSpendingIcon src="/Images/transportationicon1.svg" />
        <SmartSpendingContentTextContainer>
          <SmartSpendingType>{type}</SmartSpendingType>
          <SmartSpendingType>
            Suggestion:{" "}
            <Suggestion>
              {value} of your Salary&nbsp;
              {spendingData?.salary}.
            </Suggestion>
          </SmartSpendingType>
          {expandedCard === type && (
            <div>
              {/* Tip or additional information */}
              <p>{tip}</p>
            </div>
          )}
        </SmartSpendingContentTextContainer>
      </SmartSpendingItemContentContainer>
      <ButtonContainer>
        <ViewMoreButton onClick={() => toggleCard(type)}>
          {expandedCard === type ? "View Less" : "View More"}{" "}
          <SmartSpendingIcon src="/Images/viewmore.svg" />
        </ViewMoreButton>
      </ButtonContainer>
    </SmartSpendingItemCard>
  );

  const tips = {
    Rent: "Keep your rent under control! Aim for no more than 30% of your income. If it’s getting too high, consider a more affordable living space.",
    Food: "Cooking at home can be fun and save you money! Plan your meals and avoid unnecessary takeout.",
    Shopping:
      "Shop smart! Set a monthly limit for buying clothes, gadgets, and other fun items. Wait for sales or look for discounts to get the best deals.",
    Travelling:
      "Keep transportation costs within 10%. Consider biking, walking, or using public transport to save money and improve your health.",
    Health:
      "Invest in preventive health measures and ensure you have insurance to cover unexpected medical expenses.",
    Entertainment:
      "Enjoy entertainment, but stay within a budget. Look for affordable or free activities that you can enjoy with family and friends.",
    Savings:
      "Secure your future by saving 20% of your income. Automate your savings so it’s easy and consistent!",
    Miscellaneous:
      "Keep an extra cushion for life’s surprises. This includes utilities, emergency funds, and other unexpected expenses.",
  };

  return (
    <SmartSpendingSuggestionsMainContainer>
      <SmartSpendingSuggestionsSubContainer>
        <SmartSpendingSuggestionsHeading>
          Smart Spending Suggestions Based on Your Salary
        </SmartSpendingSuggestionsHeading>
        <SmartSpendingCardsContainer>
          {renderCard("Rent", spendingData?.rent, tips.Rent)}
          {renderCard("Food", spendingData?.food, tips.Food)}
          {renderCard("Shopping", spendingData?.shopping, tips.Shopping)}
          {renderCard("Travelling", spendingData?.travelling, tips.Travelling)}
          {renderCard("Health", spendingData?.health, tips.Health)}
          {renderCard(
            "Entertainment",
            spendingData?.entertainment,
            tips.Entertainment
          )}
          {renderCard("Savings", spendingData?.savings, tips.Savings)}
          {renderCard(
            "Miscellaneous",
            spendingData?.miscellaneous,
            tips.Miscellaneous
          )}
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
