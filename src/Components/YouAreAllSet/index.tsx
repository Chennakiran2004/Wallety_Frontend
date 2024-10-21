
import { OuterAllSetContainer, CombinedGifAndtextDiv, AllSetText, ContinueButtonInAllSet, GifWrapper } from "./allSetStyled";
export default function YouAreAllSet() {
  const GifComponent = () => {
const gifUrl = `gifs/allsetTickMark.gif?${new Date().getTime()}`;

    
    return <GifWrapper gifUrl={gifUrl} />;
  };

  return (
    <OuterAllSetContainer>
      <CombinedGifAndtextDiv>
        <GifComponent />
        <AllSetText>You are all set</AllSetText>
      </CombinedGifAndtextDiv>
      <ContinueButtonInAllSet>Okay</ContinueButtonInAllSet>
    </OuterAllSetContainer>
    
  );
}