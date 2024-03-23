import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
