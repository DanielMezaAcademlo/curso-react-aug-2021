import React from "react";

//Components
import Header from "../componentes/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />

      {children}
    </>
  );
};

export default MainLayout;
