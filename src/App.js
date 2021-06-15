import React from "react";

import "./App.css";
import Analytics from "./components/Analytics";
import Header from "./components/Header";
import SubmitAnswer from "./components/SubmitAnswer";
import TabBar from "./components/TabBar";

const App = () => {
  return (
    <>
      <Header />
      <TabBar />
      <SubmitAnswer />
      <Analytics />
    </>
  );
};

export default App;
