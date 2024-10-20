import { AnimatePresence } from 'framer-motion'
import { GlobalButton1 } from '../GainTotalControlOfYourMoney/styledComponents'
import {AccountSetUpContainer,
     AccountSubContainer, 
     AccountSetUpHeading, 
     AccountSideHeading,
     AccountSetUpContents, LetsGo} from './setupstyled'

const SetUp = ()=>{
    return(
        <AnimatePresence mode = "wait">
            <AccountSetUpContainer initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: -300 }} transition={{ duration: 0.2 }}>
                <AccountSubContainer>
                    <AccountSetUpContents>
                        <AccountSetUpHeading>Let’s setup your <br/>account!</AccountSetUpHeading>
                        <AccountSideHeading>Account can be your bank, credit card or your wallet.</AccountSideHeading>
                    </AccountSetUpContents>
                    <LetsGo>Let's go</LetsGo>
                </AccountSubContainer>
            </AccountSetUpContainer>
        </AnimatePresence>
        
    )
}

export default SetUp