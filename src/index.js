import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./dashboard";

import "./styles.css";

function App() {
  const data = [
    {
      description: "Task 1",
      estimation: 5,
      status: "done"
    },
    {
      description: "Task 2",
      estimation: 7,
      status: "on going"
    },
    {
      description: "Task 3",
      estimation: 2,
      status: "not started"
    }
  ];
  return (
    <div className="App">
      <Dashboard tasks={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
