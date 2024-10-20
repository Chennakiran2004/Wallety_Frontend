import { useNavigate } from "react-router-dom";
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

const KnowWhereYourMoneyGoes = () => {
  const navigate = useNavigate();

  const navigateSignIn = () => {
    navigate("/Signup");
  };
  return (
    <CarouseItemMainContainer>
      <CarouselItemImage src="/Images/home2.svg" />
      <CarouselItemTextContainer>
        <CarouselItemHeading>Know where your money goes </CarouselItemHeading>
        <CarouselItemDescription>
          Track your transaction easily, with categories and financial report{" "}
        </CarouselItemDescription>
      </CarouselItemTextContainer>
      <GlobalButtonsContainer>
        <GlobalButton1 onClick={navigateSignIn}>Sign Up</GlobalButton1>
        <GlobalButton2>Learn More</GlobalButton2>
      </GlobalButtonsContainer>
    </CarouseItemMainContainer>
  );
};

export default KnowWhereYourMoneyGoes;
