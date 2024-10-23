import styled from "styled-components";
import { DescriptionHeading } from "../Transaction/styledComponents";

export const NoTransactionsContainer = styled.div`
  height: 68vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

export const NoTransactionsHeading = styled(DescriptionHeading)`
  text-align: center;
  font-size: 24px;
`;
