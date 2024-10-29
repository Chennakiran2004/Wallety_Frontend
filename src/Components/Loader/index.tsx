// LoaderSpinner.tsx
import React from "react";
import { Oval } from "react-loader-spinner";

const LoaderSpinner: React.FC = () => (
  <Oval
    height={40}
    width={40}
    color="#7f3dff"
    visible={true}
    ariaLabel="loading"
  />
);

export default LoaderSpinner;
