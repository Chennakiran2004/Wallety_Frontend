import styled from "styled-components";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";

// Types for GifWrapper props
interface GifWrapperProps {
  gifUrl: string;
}

export const OuterAllSetContainer = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const CombinedGifAndtextDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AllSetImage = styled.img`
  width: 90%;
  height: 100%;
`;

export const AllSetText = styled.h2`
  color: #000;
`;

export const ContinueButtonInAllSet = styled(GlobalButton1)`
  width: 90%;
  margin-top: 26%;
`;

export const GifWrapper = styled.div<GifWrapperProps>`
  width: 300px;
  height: 200px;
  background: ${(props) => `url(${props.gifUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
