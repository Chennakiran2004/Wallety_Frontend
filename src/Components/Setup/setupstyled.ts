import styled from "styled-components";
import { interMedium } from "../../Constants/fontStyles";
import { GlobalButton1 } from "../GainTotalControlOfYourMoney/styledComponents";
import {motion} from 'framer-motion'

export const AccountSetUpContainer = styled(motion.div)`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const AccountSubContainer = styled.div`
    width: 90%;
    margin: auto;
    flex-grow: 1;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
`

export const AccountSetUpHeading = styled.h1`
    ${interMedium}
    font-size: 36px;
    text-align: left;
`

export const AccountSideHeading = styled.p`
    ${interMedium}
    font-size: 18px;
    text-align: left;
`

export const AccountSetUpContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const LetsGo = styled(GlobalButton1)`
    width: 100%;
    margin-top: auto;
    margin-bottom: 20px; 
`
