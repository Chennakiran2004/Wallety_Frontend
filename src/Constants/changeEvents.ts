import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";

const ChangeEvents = () => {
  const navigate = useNavigate();

  const changePassword = (e: ChangeEvent<HTMLInputElement>) => {
    return e.target.value;
  };

  const handleBack = () => {
    navigate("/");
  };

  return { changePassword, handleBack };
};

export default ChangeEvents;
