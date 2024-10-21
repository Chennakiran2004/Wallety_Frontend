import {
  SignUpContainer,
  SignUpSubContainer,
  HeaderContainer,
  IconContianer,
  SignUpHeading,
  FieldsContainer,
  InputField,
  InputFieldContainerWrapper,
  EyeIconContainer,
  GenderIconContainer,
  GenderContainer,
  ParaElement,
  GenderHeadingContainer,
  GenderContents,
  GenderButton,
  SignUpButton,
  HidePassword,
  AlreadyHaveAnAccout,
  LoginLink,
} from "./signupstyled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ChangeEvents, NavigationEvents } from "../../Constants/EventHandlers";
import { motion } from "framer-motion";

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

const pageVariants = {
  initial: {
    x: "1000000vw", // Start from right
    opacity: 0,
  },
  animate: {
    x: "0vw", // Slide into view
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  exit: {
    x: "-100vw", // Exit to left
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [genderContents, setGenderContents] = useState(false);
  const [roleContents, setRoleContents] = useState(false);
  const [isPassword, setIsPassword] = useState(true);

  const [gender, setGender] = useState("Gender");
  const [role, setRole] = useState("Role");
  const [error, setError] = useState<String | undefined>(undefined);

  const { changePassword } = ChangeEvents();
  const { handleBack } = NavigationEvents();

  const openGenderDropDown = () => {
    setGenderContents(!genderContents);
    setRoleContents(false);
  };

  const openRolesDropDown = () => {
    setRoleContents(!roleContents);
    setGenderContents(false);
  };

  const submitForm = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      role === "Role" ||
      gender === "Gender"
    ) {
      setError("Please fill all the fields");
    } else {
      navigate("/Setup");
    }
  };

  return (      
      <SignUpContainer>
         {/* variants={pageVariants} initial="initial" animate="animate" exit="exit" */}
        <SignUpSubContainer>
          <HeaderContainer>
            <IconContianer onClick={handleBack} size={40} />
            <SignUpHeading>Sign Up</SignUpHeading>
          </HeaderContainer>
          <FieldsContainer
            onSubmit={(e) => {
              e.preventDefault();
              setGenderContents(false);
            }}
          >
            <InputField
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputFieldContainerWrapper>
              <InputField
                placeholder="Password"
                type={isPassword ? "password" : "text"}
                onChange={(e) => setPassword(changePassword(e))}
                value={password}
              />
              {isPassword ? (
                <EyeIconContainer
                  onClick={() => setIsPassword(false)}
                  size={24}
                />
              ) : (
                <HidePassword onClick={() => setIsPassword(true)} size={24} />
              )}
            </InputFieldContainerWrapper>
            <GenderContainer>
              <GenderHeadingContainer onClick={openGenderDropDown}>
                <ParaElement>{gender}</ParaElement>
                <GenderIconContainer size={24} isactive={genderContents} />
              </GenderHeadingContainer>
              <AnimatePresence mode="wait">
                {genderContents && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate={genderContents ? "visible" : "hidden"}
                    exit="exit"
                  >
                    <GenderContents>
                      <GenderButton onClick={() => setGender("Male")}>
                        Male
                      </GenderButton>
                      <GenderButton onClick={() => setGender("Female")}>
                        Female
                      </GenderButton>
                    </GenderContents>
                  </motion.div>
                )}
              </AnimatePresence>
            </GenderContainer>
            <GenderContainer>
              <GenderHeadingContainer onClick={openRolesDropDown}>
                <ParaElement>{role}</ParaElement>
                <GenderIconContainer isactive={roleContents} size={24} />
              </GenderHeadingContainer>
              <AnimatePresence mode="wait">
                {roleContents && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate={roleContents ? "visible" : "hidden"}
                    exit="exit"
                  >
                    <GenderContents>
                      <GenderButton
                        onClick={() => {
                          setRole("Employee");
                          setRoleContents(false);
                        }}
                      >
                        Employee
                      </GenderButton>
                      <GenderButton
                        onClick={() => {
                          setRole("Student");
                          setRoleContents(false);
                        }}
                      >
                        Student
                      </GenderButton>
                    </GenderContents>
                  </motion.div>
                )}
              </AnimatePresence>
            </GenderContainer>
            {error && <p>{error}</p>}
            <SignUpButton type="submit" onClick={submitForm}>
              Sign Up
            </SignUpButton>
            <AlreadyHaveAnAccout>
              Already have an account? <LoginLink to="/login">Login</LoginLink>
            </AlreadyHaveAnAccout>
          </FieldsContainer>
        </SignUpSubContainer>
      </SignUpContainer>
  );
};

export default SignUp;
