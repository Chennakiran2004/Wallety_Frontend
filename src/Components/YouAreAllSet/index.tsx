import { NavigationEvents } from "../../Constants/EventHandlers";
import {
  OuterAllSetContainer,
  CombinedGifAndtextDiv,
  AllSetText,
  ContinueButtonInAllSet,
  GifWrapper,
} from "./allSetStyled";

export const GifComponent = () => {
  const gifUrl = `/gifs/finnalYouAreAllSet.gif?${new Date().getTime()}`;
  return <GifWrapper gifUrl={gifUrl} />;
};

export default function YouAreAllSet() {
  const { navigateToHome } = NavigationEvents();

  return (
    <OuterAllSetContainer>
      <CombinedGifAndtextDiv>
        <GifComponent />
        <AllSetText>You are all set</AllSetText>
      </CombinedGifAndtextDiv>
      <ContinueButtonInAllSet onClick={navigateToHome}>
        Done
      </ContinueButtonInAllSet>
    </OuterAllSetContainer>
  );
}
