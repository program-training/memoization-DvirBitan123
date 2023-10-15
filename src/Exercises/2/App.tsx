import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function App2() {
  const [obj, setObj] = useState([{ value: 0 }]);

  return (
    <div className="App">
      <ChildComponent obj={obj} setObj = {setObj} />
    </div>
  );
}

export default App2;
