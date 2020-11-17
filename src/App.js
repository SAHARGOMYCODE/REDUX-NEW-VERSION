import "./App.css";
import React from "react";

import AddItems from "./components/Additems";
import ListItems from "./components/ListItems";

function App() {
  return (
    <div className="App">
      <AddItems />
      <ListItems />
    </div>
  );
}

export default App;
