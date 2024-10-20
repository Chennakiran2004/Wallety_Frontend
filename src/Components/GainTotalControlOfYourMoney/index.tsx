import {
  CarouseItemMainContainer,
  CarouselItemDescription,
  CarouselItemHeading,
  CarouselItemImage,
  CarouselItemTextContainer,
  GlobalButton1,
  GlobalButton2,
  GlobalButtonsContainer,
} from "./styledComponents";

const GainTotalControlOfYourMoney = () => {
  return (
    <CarouseItemMainContainer>
      <CarouselItemImage src="/Images/home1.svg" />
      <CarouselItemTextContainer>
        <CarouselItemHeading>
          Gain total control of your money
        </CarouselItemHeading>
        <CarouselItemDescription>
          Become your own money manager and make every cent count
        </CarouselItemDescription>
      </CarouselItemTextContainer>
      <GlobalButtonsContainer>
        <GlobalButton1>Sign Up</GlobalButton1>
        <GlobalButton2>Learn More</GlobalButton2>
      </GlobalButtonsContainer>
    </CarouseItemMainContainer>
  );
};

export default GainTotalControlOfYourMoney;
