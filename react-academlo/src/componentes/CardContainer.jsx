import React from "react";

const CardContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
      }}
    >
      {children}
    </div>
  );
};

export default CardContainer;
