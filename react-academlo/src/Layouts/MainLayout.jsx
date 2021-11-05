import React from "react";

//Components
import Header from "../Components/Custom/Header/Header";

const MainLayout = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default MainLayout;
