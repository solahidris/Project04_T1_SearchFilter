import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  // About
  // Build an app that allows users to
  // enter search keys and it filters the user list
  // from the hardcode list based on the entered key

  const userList = [
    "Michael",
    "Ali",
    "Abu",
    "Apabenda",
    "Utoh",
    "PaleBana",
    "Gapodior",
    "Korok",
    "Kering",
  ];
  const [userInput, setUserInput] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const userInputHandler = (event) => {
    const userInput = event.target.value;
    setUserInput(userInput);

    const filtered = userList.filter((user) =>
      user.toLowerCase().includes(userInput.toLowerCase())
    );
    setFilteredList(filtered);
  };

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
          <h3 className="h3Margin">User List:</h3>
          {/* userList with , and spaces*/}
          <h4>{userList.join(", ")}</h4>
          <p className="dividerLine">------------------</p>
          <input type={"text"} onChange={userInputHandler}></input>
          <p>Keyword Filter = {userInput}</p>
          <ul className="ulMargin">
            {filteredList.map((user) => (
              <li key={user}>{user}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
