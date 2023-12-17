import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center">
      <span>Loading</span>
      <span className="loading loading-infinity loading-lg"></span>
    </div>
  );
};

export default Loader;
