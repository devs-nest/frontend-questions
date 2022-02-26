import "./App.css";
import React, { useState } from "react";
import ClassExample from "./components/ClassExample";
import FunctionalCom from "./components/FunctionalCom";

function App() {
  const [count, setCount] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    console.log("Button Clicked");
    setCount(count + 1);
  }

  return (
    <div className="App">
      <ClassExample />
      <FunctionalCom />
      <div>
        <button onClick={(e) => handleClick(e)}>Click me Senpai</button>
        <p>You have clicked the button {count} times</p>
      </div>
    </div>
  );
}

export default App;
