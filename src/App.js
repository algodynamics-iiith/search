import "./App.css";

import React from "react";
import Header from "./components/Header";
import SubmitAnswer from "./components/SubmitAnswer";
import TabBar from "./components/TabBar";

const App = () => {
  return (
    <>
      <Header />
      <TabBar />
      <SubmitAnswer />
    </>
  );
};

export default App;
