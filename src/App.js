import React from "react";

import "./Styles/App.scss";
import Header from "./Components/Header";
import MenuBar from "./Components/MenuBar";
function App() {
  return (
    <div className="app">
      {/* router */}
      {/* header */}
      <Header />
      {/* sidebar */}
      <MenuBar />
    </div>
  );
}

export default App;
