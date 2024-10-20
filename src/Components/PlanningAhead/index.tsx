import {
  CarouseItemMainContainer,
  CarouselItemDescription,
  CarouselItemHeading,
  CarouselItemImage,
  CarouselItemTextContainer,
  GlobalButton1,
  GlobalButton2,
  GlobalButtonsContainer,
} from "../GainTotalControlOfYourMoney/styledComponents";

const PlanningAhead = () => {
  return (
    <CarouseItemMainContainer>
      <CarouselItemImage src="/Images/home3.svg" />
      <CarouselItemTextContainer>
        <CarouselItemHeading>Planning ahead</CarouselItemHeading>
        <CarouselItemDescription style={{ marginBottom: "24px" }}>
          Setup your budget for each category so you in control{" "}
        </CarouselItemDescription>
      </CarouselItemTextContainer>
      <GlobalButtonsContainer>
        <GlobalButton1>Sign Up</GlobalButton1>
        <GlobalButton2>Learn More</GlobalButton2>
      </GlobalButtonsContainer>
    </CarouseItemMainContainer>
  );
};

export default PlanningAhead;
