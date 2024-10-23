import {
  CarouseItemMainContainer,
  CarouselItemDescription,
  CarouselItemHeading,
  CarouselItemImage,
  CarouselItemTextContainer,
} from "../GainTotalControlOfYourMoney/styledComponents";

const KnowWhereYourMoneyGoes = () => {
  return (
    <CarouseItemMainContainer>
      <CarouselItemImage src="/Images/home2.svg" />
      <CarouselItemTextContainer>
        <CarouselItemHeading>Know where your money goes </CarouselItemHeading>
        <CarouselItemDescription>
          Track your transaction easily, with categories and financial report{" "}
        </CarouselItemDescription>
      </CarouselItemTextContainer>
    </CarouseItemMainContainer>
  );
};

export default KnowWhereYourMoneyGoes;
