import React from "react";
import "./App.css";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SearchedPage from "./components/SearchedPage";
import SearchContextProvider from "./data/searchContext";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <SearchContextProvider>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={SearchedPage} />
          </SearchContextProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
