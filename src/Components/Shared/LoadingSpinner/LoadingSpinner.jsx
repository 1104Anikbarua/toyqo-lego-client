import React from "react";
import { MoonLoader } from "react-spinners";

const LoadingSpinner = () => {
  const override = {
    display: "block",
    margin: "300px auto",
  };
  return (
    <div className="min-h-screen">
      <MoonLoader
        color={"black"}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default LoadingSpinner;
