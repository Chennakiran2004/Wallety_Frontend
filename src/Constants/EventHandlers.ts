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

  const naviagteToYouAreAllSet = () => {
    navigate("/youAreAllSet");
  };

  const navigateToHome = () => {
    navigate("/home");
  };

  const navigateToTransaction = () => {
    navigate("/transaction");
  };

  const navigateToUserInfo = () => {
    navigate("/userInfo");
  };

  const navigateToTransactionDetails = (id: number) => {
    navigate(`/transaction/:${id}`);
  };

  const navigateToFinancialReport = () => {
    navigate("/financialReport");
  };

  const navigateToSmartSpendingSuggestions = () => {
    navigate("/smartSpendingSuggestions");
  };

  return {
    navigateSignIn,
    navigateLogin,
    handleBack,
    navigateAddNewAccount,
    naviagteToYouAreAllSet,
    navigateToHome,
    navigateToTransaction,
    navigateToTransactionDetails,
    navigateToUserInfo,
    navigateToFinancialReport,
    navigateToSmartSpendingSuggestions,
  };
};
