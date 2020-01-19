import React from "react";
import ReactDOM from "react-dom";
import Primary from "./Primary";
import Secondary from "./Secondary";
import "./index.css";
const App = () => {
  return (
    <>
      <h1>Let's Learn Rebasing</h1>
      <h4>Become the best version of yourself everyday</h4>
      <Primary />
      <Secondary />
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
