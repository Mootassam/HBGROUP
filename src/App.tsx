import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import RoutesComponents from "./shared/routes/RoutesComponents";

function App() {
  const Component = () => {
    return <h1> Im the best in the world</h1>;
  };
  return (
    <BrowserRouter>
      <RoutesComponents />
    </BrowserRouter>
  );
}

export default App;
