import React from "react";
import "./Styles/App.scss";
import Header from "./Components/Header";
import MenuBar from "./Components/MenuBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Components/Chat";
function App() {
  return (
    <div className="app">
      <Router>
        {/* header */}
        <Header />
        <div className="app__body">
          {/* sidebar */}
          <MenuBar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
