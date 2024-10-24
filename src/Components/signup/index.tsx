// import {
//   SignUpContainer,
//   SignUpSubContainer,
//   HeaderContainer,
//   IconContianer,
//   SignUpHeading,
//   FieldsContainer,
//   InputField,
//   InputFieldContainerWrapper,
//   EyeIconContainer,
//   GenderIconContainer,
//   GenderContainer,
//   ParaElement,
//   GenderHeadingContainer,
//   GenderContents,
//   GenderButton,
//   SignUpButton,
//   HidePassword,
//   AlreadyHaveAnAccout,
//   LoginLink,
// } from "./signupstyled";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import {
//   ChangeEvents,
//   ChangingTokens,
//   NavigationEvents,
//   url,
// } from "../../Constants/EventHandlers";
// import { motion } from "framer-motion";
// import axios from "axios";
// import withAuthRedirect from "../../Constants/WithAuthRedirect";

// const dropdownVariants = {
//   hidden: {
//     opacity: 0,
//     height: 0,
//     transition: {
//       duration: 0.2,
//     },
//   },
//   visible: {
//     opacity: 1,
//     height: "auto",
//     transition: {
//       duration: 0.2,
//     },
//   },
//   exit: {
//     opacity: 0,
//     height: 0,
//     transition: {
//       duration: 0.2,
//     },
//   },
// };

// const SignUp = () => {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");

//   const [genderContents, setGenderContents] = useState(false);
//   const [roleContents, setRoleContents] = useState(false);
//   const [isPassword, setIsPassword] = useState(true);

//   const [gender, setGender] = useState("Gender");
//   const [role, setRole] = useState("Role");
//   const [error, setError] = useState<String | undefined>(undefined);

//   const { changePassword } = ChangeEvents();
//   const { handleBack } = NavigationEvents();
//   const { setAccessToken, setRefreshToken } = ChangingTokens();

//   const openGenderDropDown = () => {
//     setGenderContents(!genderContents);
//     setRoleContents(false);
//   };

//   const openRolesDropDown = () => {
//     setRoleContents(!roleContents);
//     setGenderContents(false);
//   };

//   const submitForm = () => {
//     if (
//       name === "" ||
//       email === "" ||
//       password === "" ||
//       role === "Role" ||
//       gender === "Gender" ||
//       username === ""
//     ) {
//       setError("Please fill all the fields");
//     } else {
//       const fetching = async () => {
//         try {
//           const data = {
//             username: username,
//             email: email,
//             password: password,
//             full_name: name,
//             role: role,
//             gender: gender,
//           };

//           console.log(data);
//           const response = await axios.post(
//             `${url}/user_account/signup/v1`,
//             data
//           );
//           setAccessToken(response.data.access_token);
//           setRefreshToken(response.data.refresh_token);
//           console.log(response.data);
//         } catch (err) {
//           console.log("Error");
//         }
//       };
//       fetching();
//       //make an api call here
//       navigate("/Setup");
//     }
//   };

//   return (
//     <SignUpContainer>
//       {/* variants={pageVariants} initial="initial" animate="animate" exit="exit" */}
//       <SignUpSubContainer>
//         <HeaderContainer>
//           <IconContianer onClick={handleBack} size={40} />
//           <SignUpHeading>Sign Up</SignUpHeading>
//         </HeaderContainer>
//         <FieldsContainer
//           onSubmit={(e) => {
//             e.preventDefault();
//             setGenderContents(false);
//           }}
//         >
//           <InputField
//             placeholder="Name"
//             onChange={(e) => setName(e.target.value)}
//           />
//           <InputField
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <InputField
//             placeholder="Username"
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <InputFieldContainerWrapper>
//             <InputField
//               placeholder="Password"
//               type={isPassword ? "password" : "text"}
//               onChange={(e) => setPassword(changePassword(e))}
//               value={password}
//             />
//             {isPassword ? (
//               <EyeIconContainer
//                 onClick={() => setIsPassword(false)}
//                 size={24}
//               />
//             ) : (
//               <HidePassword onClick={() => setIsPassword(true)} size={24} />
//             )}
//           </InputFieldContainerWrapper>
//           <GenderContainer>
//             <GenderHeadingContainer onClick={openGenderDropDown}>
//               <ParaElement>{gender}</ParaElement>
//               <GenderIconContainer size={24} isactive={genderContents} />
//             </GenderHeadingContainer>
//             <AnimatePresence mode="wait">
//               {genderContents && (
//                 <motion.div
//                   variants={dropdownVariants}
//                   initial="hidden"
//                   animate={genderContents ? "visible" : "hidden"}
//                   exit="exit"
//                 >
//                   <GenderContents>
//                     <GenderButton onClick={() => setGender("MALE")}>
//                       Male
//                     </GenderButton>
//                     <GenderButton onClick={() => setGender("FEMALE")}>
//                       Female
//                     </GenderButton>
//                   </GenderContents>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </GenderContainer>
//           <GenderContainer>
//             <GenderHeadingContainer onClick={openRolesDropDown}>
//               <ParaElement>{role}</ParaElement>
//               <GenderIconContainer isactive={roleContents} size={24} />
//             </GenderHeadingContainer>
//             <AnimatePresence mode="wait">
//               {roleContents && (
//                 <motion.div
//                   variants={dropdownVariants}
//                   initial="hidden"
//                   animate={roleContents ? "visible" : "hidden"}
//                   exit="exit"
//                 >
//                   <GenderContents>
//                     <GenderButton
//                       onClick={() => {
//                         setRole("Employee");
//                         setRoleContents(false);
//                       }}
//                     >
//                       Employee
//                     </GenderButton>
//                     <GenderButton
//                       onClick={() => {
//                         setRole("Student");
//                         setRoleContents(false);
//                       }}
//                     >
//                       Student
//                     </GenderButton>
//                   </GenderContents>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </GenderContainer>
//           {error && <p>{error}</p>}
//           <SignUpButton type="submit" onClick={submitForm}>
//             Sign Up
//           </SignUpButton>
//           <AlreadyHaveAnAccout>
//             Already have an account? <LoginLink to="/login">Login</LoginLink>
//           </AlreadyHaveAnAccout>
//         </FieldsContainer>
//       </SignUpSubContainer>
//     </SignUpContainer>
//   );
// };

// export default withAuthRedirect(SignUp);

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
import {
  ChangeEvents,
  ChangingTokens,
  NavigationEvents,
  url,
} from "../../Constants/EventHandlers";
import { motion } from "framer-motion";
import axios from "axios";
import withAuthRedirect from "../../Constants/WithAuthRedirect";

// Variants for dropdown animation
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

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [genderContents, setGenderContents] = useState(false);
  const [roleContents, setRoleContents] = useState(false);
  const [isPassword, setIsPassword] = useState(true);

  const [gender, setGender] = useState("Gender");
  const [role, setRole] = useState("Role");
  const [error, setError] = useState<String | undefined>(undefined);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [roleError, setRoleError] = useState(false);

  const { changePassword } = ChangeEvents();
  const { handleBack } = NavigationEvents();
  const { setAccessToken, setRefreshToken } = ChangingTokens();

  // Email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const openGenderDropDown = () => {
    setGenderContents(!genderContents);
    setRoleContents(false);
  };

  const openRolesDropDown = () => {
    setRoleContents(!roleContents);
    setGenderContents(false);
  };

  const submitForm = () => {
    // Reset errors on each submit
    setNameError(false);
    setEmailError(false);
    setEmailFormatError(false);
    setPasswordError(false);
    setUsernameError(false);
    setGenderError(false);
    setRoleError(false);

    let hasError = false;

    // Check if any field is empty and set the respective error state
    if (name === "") {
      setNameError(true);
      hasError = true;
    }
    if (email === "") {
      setEmailError(true);
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setEmailFormatError(true);
      hasError = true;
    }
    if (password === "") {
      setPasswordError(true);
      hasError = true;
    }
    if (username === "") {
      setUsernameError(true);
      hasError = true;
    }
    if (gender === "Gender") {
      setGenderError(true);
      hasError = true;
    }
    if (role === "Role") {
      setRoleError(true);
      hasError = true;
    }

    if (!hasError) {
      const fetching = async () => {
        try {
          const data = {
            username: username,
            email: email,
            password: password,
            full_name: name,
            role: role,
            gender: gender,
          };

          console.log(data);
          const response = await axios.post(
            `${url}/user_account/signup/v1`,
            data
          );
          setAccessToken(response.data.access_token);
          setRefreshToken(response.data.refresh_token);
          console.log(response.data);
        } catch (err) {
          console.log(err);
          console.log("Error");
        }
      };
      fetching();
      // Navigate to the setup page after successful signup
      navigate("/Setup");
    } else {
      setError("Please fill all the fields correctly");
    }
  };

  return (
    <SignUpContainer>
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
          <div>
            <InputField
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Name is required
              </p>
            )}
          </div>

          <div>
            <InputField
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Email is required
              </p>
            )}
            {emailFormatError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Please enter a valid email
              </p>
            )}
          </div>

          <div>
            <InputField
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Username is required
              </p>
            )}
          </div>

          <div>
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
            {passwordError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Password is required
              </p>
            )}
          </div>

          <div>
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
                      <GenderButton onClick={() => setGender("MALE")}>
                        Male
                      </GenderButton>
                      <GenderButton onClick={() => setGender("FEMALE")}>
                        Female
                      </GenderButton>
                    </GenderContents>
                  </motion.div>
                )}
              </AnimatePresence>
            </GenderContainer>
            {genderError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Gender is required
              </p>
            )}
          </div>

          <div>
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
            {roleError && (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "left",
                  paddingLeft: "6%",
                  paddingTop: "1%",
                }}
              >
                *Role is required
              </p>
            )}
          </div>

          {error && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
              }}
            >
              {error}
            </p>
          )}
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

export default withAuthRedirect(SignUp);
