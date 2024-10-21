import { useState } from "react";
import { NavigationEvents } from "../../Constants/EventHandlers";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import {
  AccountDetailsContainer,
  AccountDetailsSubContainer,
  AddNewAccountHeading,
  AddNewAccountHeadingContainer,
  AddNewAccountIconContainer,
  AddNewAccountMainContainer,
  CityLocation,
  ContinueButton,
  EnterYourSalaryContainer,
  EnterYourSalaryHeading,
  EnterYourSalaryInput,
  LocationContainer,
  LocationContents,
  LocationDropDownItem,
  LocationDropDownItemImage,
  LocationDropDownItemText,
} from "./styledComponents";

import {
  GenderContents,
  GenderButton,
  GenderContainer,
  GenderHeadingContainer,
  ParaElement,
  GenderIconContainer,
} from "../signup/signupstyled";
import { CarouselItemImage } from "../GainTotalControlOfYourMoney/styledComponents";

const dropdownVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const locations = [
  "Banjara Hills",
  "Jubilee Hills",
  "Madhapur",
  "Gachibowli",
  "Kondapur",
  "Begumpet",
  "Secunderabad",
  "Hitech City",
  "Charminar",
  "Shamshabad",
];

const AddNewAccount = () => {
  const { handleBack } = NavigationEvents();
  const [spenderContents, setSpenderContents] = useState(false);
  const [locationContents, setLocationContents] = useState(false);

  const [spender, setSpender] = useState("Select your spending pattern");
  const [location, setLocation] = useState("Location in HYD");

  const openGenderDropDown = () => {
    setSpenderContents(!spenderContents);
    setLocationContents(false);
  };

  const openLocationDropDown = () => {
    setLocationContents(!locationContents);
    setSpenderContents(false);
  };

  return (
    <AddNewAccountMainContainer>
      <AddNewAccountHeadingContainer>
        <AddNewAccountIconContainer onClick={handleBack} size={40} />
        <AddNewAccountHeading>Add New Account</AddNewAccountHeading>
      </AddNewAccountHeadingContainer>
      <CarouselItemImage src="/Images/home1.svg" />
      <AccountDetailsContainer>
        <AccountDetailsSubContainer>
          <EnterYourSalaryContainer>
            <EnterYourSalaryHeading>Enter Your Salary</EnterYourSalaryHeading>
            <EnterYourSalaryInput type="number" />
          </EnterYourSalaryContainer>

          <GenderContainer>
            <GenderHeadingContainer onClick={openGenderDropDown}>
              <ParaElement>{spender}</ParaElement>
              <GenderIconContainer size={24} isactive={spenderContents} />
            </GenderHeadingContainer>
            <AnimatePresence mode="wait">
              {spenderContents && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate={spenderContents ? "visible" : "hidden"}
                  exit="exit"
                >
                  <GenderContents>
                    <GenderButton onClick={() => setSpender("High Spender")}>
                      High Spender
                    </GenderButton>
                    <GenderButton onClick={() => setSpender("Average Spender")}>
                      Average Spender
                    </GenderButton>
                    <GenderButton onClick={() => setSpender("Less Spender")}>
                      Less Spender
                    </GenderButton>
                  </GenderContents>
                </motion.div>
              )}
            </AnimatePresence>
          </GenderContainer>

          <LocationContainer>
            <CityLocation>Hyderabad</CityLocation>
            <GenderContainer>
              <GenderHeadingContainer onClick={openLocationDropDown}>
                <ParaElement>{location}</ParaElement>
                <GenderIconContainer size={24} isactive={locationContents} />
              </GenderHeadingContainer>
              <AnimatePresence mode="wait">
                {locationContents && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate={locationContents ? "visible" : "hidden"}
                    exit="exit"
                  >
                    <LocationContents>
                      {locations.map((loc, index) => (
                        <LocationDropDownItem
                          key={index}
                          onClick={() => setLocation(loc)}
                        >
                          <LocationDropDownItemText>
                            {loc}
                          </LocationDropDownItemText>
                          <LocationDropDownItemImage src="/Images/Arrow 1.svg" />
                        </LocationDropDownItem>
                      ))}
                    </LocationContents>
                  </motion.div>
                )}
              </AnimatePresence>
            </GenderContainer>
          </LocationContainer>
          <ContinueButton>Continue</ContinueButton>
        </AccountDetailsSubContainer>
      </AccountDetailsContainer>
    </AddNewAccountMainContainer>
  );
};

export default AddNewAccount;
