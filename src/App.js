import "./App.css";
import React from "react";
import { useState } from "react";
import MainMenu from "./components/MainMenu";
import CreateACharacter from "./components/CreateACharacter";
// JSX = javascript XML - javascript code written with XML format
// XML is a markup language like html where you can make open and closing tags with whatever names you want.
// Components can only return one thing - no siblings allowed
function App() {
  const [screen, setScreen] = useState("main");
  return (
    <div>
      {screen === "main" ? (
        <MainMenu setScreen={setScreen} />
      ) : (
        <CreateACharacter />
      )}
    </div>
  );
}
export default App;
