import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      breed: "Havanese",
      name: "Luna",
    }),
    React.createElement(Pet, {
      animal: "Bird",
      breed: "Cockatiel",
      name: "Pepper",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      breed: "Mixed",
      name: "Doink",
    }),
  ]);
};
const container = document.getElementById("root");
const myRoot = createRoot(container);
myRoot.render(React.createElement(App));
