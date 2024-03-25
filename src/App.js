import React from "react";
import Header from "./Header";
import Menu from "./Menu";

import Footer from "./Footer";
import "./App.css";
import Milieu from "./Milieu";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Milieu/>
      <Footer />
    </div>
  );
}

export default App;
