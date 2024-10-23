import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { ChangingTokens } from "../../Constants/EventHandlers";

const ProtectedRoute: React.FC = () => {
  const { accessToken } = ChangingTokens();

  if (accessToken === undefined) {
    return <Navigate to="/signIn" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
