import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";
import Cookies from 'js-cookie';

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

  const navigateToLogin = ()=>{
    navigate("/login")
  }

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
    navigateToFinancialReport, navigateToLogin
  };
};

export const ChangingTokens = ()=>{
  const setAccessToken = (token: string)=>{
      Cookies.set('access_token', token, { expires: 7 });
  }

  const setRefreshToken = (token: string)=>{
    Cookies.set('refresh_token', token, { expires: 7 });
  }

  const deleteAccessToken = ()=>{
    Cookies.remove("access_token")
  }

  const deleteRefereshToken = ()=>{
    Cookies.remove("refresh_token")
  }

  const accessToken = Cookies.get("access_token")
  const refreshToken = Cookies.get("refresh_token")

  return {setAccessToken, setRefreshToken, deleteAccessToken, deleteRefereshToken, accessToken, refreshToken}
}

export const CategoriesMap: { [key: string]: string } = {
  "Food": "/Images/food.svg",
  "Travel": "/Images/transportation.svg",

} 

export const url = `http://192.168.1.17:8000`