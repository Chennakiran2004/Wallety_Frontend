import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";
import Cookies from "js-cookie";

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

  const navigateToLogin = () => {
    navigate("/login");
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

  const navigateToTransactionDetails = (id: string) => {
    navigate(`/transaction/${id}`);
  };

  const navigateToFinancialReport = () => {
    navigate("/financialReport");
  };

  const navigateToSmartSpendingSuggestions = () => {
    navigate("/smartSpendingSuggestions");
  };

  const navigateToMonthReview = () => {
    navigate("/monthReview");
  };

  const navigateToExpense = () => {
    navigate("/expense");
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
    navigateToLogin,
    navigateToMonthReview,
    navigateToExpense,
  };
};

export const ChangingTokens = () => {
  const setAccessToken = (token: string) => {
    Cookies.set("access_token", token, { expires: 7 });
  };

  const setRefreshToken = (token: string) => {
    Cookies.set("refresh_token", token, { expires: 7 });
  };

  const deleteAccessToken = () => {
    Cookies.remove("access_token");
  };

  const deleteRefereshToken = () => {
    Cookies.remove("refresh_token");
  };

  const accessToken = Cookies.get("access_token");
  const refreshToken = Cookies.get("refresh_token");

  return {
    setAccessToken,
    setRefreshToken,
    deleteAccessToken,
    deleteRefereshToken,
    accessToken,
    refreshToken,
  };
};

export const CategoriesMap: { [key: string]: string } = {
  Food: "/Images/food.svg",
  Travel: "/Images/transportation.svg",
  Entertainment: "/Images/subscription.svg",
  Shopping: "/Images/shoppingicon.svg",
  Rent: "/Images/renticon1.svg",
  Savings: "/Images/savingsicon.svg",
  Miscellaneous: "/Images/miscellaneousicon.svg",
  Health: "/Images/health.svg",
};

export const CategoriesColors: { [key: string]: string } = {
  Food: "#FD3C4A",
  Shopping: "#FCAC12",
  Travel: "#0077FF",
  Health: "#0077B6",
  Entertainment: "#7F3DFF",
  Miscellaneous: "red",
  Rent: "#1E3A8A",
};

export const url = `http://139.84.155.74:8000`;
