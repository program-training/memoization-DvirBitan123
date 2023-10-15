import React, { useState } from "react";
import ComplexComponent from "./ComplexComponent";

function App1() {
  const [list, setList] = useState([
    { id: 1, value: "Item 1" },
    { id: 2, value: "Item 2" },
    { id: 3, value: "Item 3" },
    { id: 5, value: "Item 5" },
    { id: 4, value: "Item 4" },
    // ... more list items
  ]);

  return (
    <div className="App">
      <ComplexComponent list={list} />
    </div>
  );
}

export default App1;
