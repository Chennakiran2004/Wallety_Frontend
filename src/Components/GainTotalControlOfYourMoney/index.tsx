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
import { NavigationEvents } from "../../Constants/changeEvents";

const GainTotalControlOfYourMoney = () => {
  const { navigateSignIn, navigateLogin } = NavigationEvents();

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
        <GlobalButton1 onClick={navigateSignIn}>Sign Up</GlobalButton1>
        <GlobalButton2 onClick={navigateLogin}>Login</GlobalButton2>
      </GlobalButtonsContainer>
    </CarouseItemMainContainer>
  );
};

export default GainTotalControlOfYourMoney;
