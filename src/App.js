import logo from "./logo.svg";
import "./App.css";
import List from "./List.js";
import React from "react";

function App() {
  let [array, setArray] = React.useState([
    "red",
    "orange",
    "yellow",
    "green",
    "bue",
  ]);
  let yourMom = "I'm hungry";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Paul's mom and {yourMom}
        </a>
      </header>
      <List itemList={array} newProp={"Not a string"} />
      <button
        onClick={() => {
          // alert("You clocked meh");
          setArray(["NYE", "Valentines", "St. Paddy's"]);
        }}
      >
        Clock Meh
      </button>
    </div>
  );
}

export default App;
