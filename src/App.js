import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  // About
  // Build an app that allows users to
  // enter search keys and it filters the user list
  // from the hardcode list based on the entered key
  const list = ["abu", "babu", "cini", "daud", "epul"];

  // One approach is to use a text input with an onChange event handler 
  // that filters and displays a list of options based on the user's input.
  // This can be implemented using state
  // to hold the list of options and the current search query,
  // and filtering the options based on the query.

  const [userInput, setUserInput] = useState('');

  function userInputHandler(event) {
    setUserInput(event.target.value);
  };

  // const userInputHandler(event) => {
  //   return setUserInput(event.target.value);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="appTitle">
          This app allows users to enter search keys and it filters the user
          list from the hardcode list based on the entered key
        </p>
        <p className="dividerLine">
          ------------------------------------------------------------
        </p>
        <div className="appContent">
          <label>{list}</label>
          <input type={"text"} value={userInput} onChange={userInputHandler}/>
          {/* <textarea /> */}
          <label>this is the current userInput = {userInput}</label>
        </div>
      </header>
    </div>
  );
}

export default App;
