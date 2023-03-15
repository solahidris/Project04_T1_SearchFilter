import logo from "./logo.svg";
import "./App.css";

function App() {
  // About
  // Build an app that allows users to
  // enter search keys and it filters the user list
  // from the hardcode list based on the entered key
  const list = ["abu", "babu", "cini", "daud", "epul"];

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
          <input type={"text"} />
          <textarea />
        </div>
      </header>
    </div>
  );
}

export default App;
