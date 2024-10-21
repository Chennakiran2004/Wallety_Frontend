import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";

// Change password function
export const ChangeEvents = () => {
  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    return e.target.value;
  };

  return { changePassword };
};

// Navigation events
export const NavigationEvents = () => {
  const navigate = useNavigate();

  const navigateSignIn = () => {
    navigate("/Signup");
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const navigateAddNewAccount = () => {
    navigate("/AddNewAccount");
  };

  return { navigateSignIn, navigateLogin, handleBack };
};
