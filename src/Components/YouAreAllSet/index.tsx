import { NavigationEvents } from "../../Constants/EventHandlers";
import {
  OuterAllSetContainer,
  CombinedGifAndtextDiv,
  AllSetText,
  ContinueButtonInAllSet,
  GifWrapper,
} from "./allSetStyled";
export default function YouAreAllSet() {
  const { navigateToHome } = NavigationEvents();

  const GifComponent = () => {
    const gifUrl = `/gifs/finnalYouAreAllSet.gif?${new Date().getTime()}`;
    return <GifWrapper gifUrl={gifUrl} />;
  };

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
