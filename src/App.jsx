import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" breed="Havanese" animal="Dog" />
    <Pet name="Pepper" breed="Cockatiel" animal="Bird" />
    <Pet name="Doink" breed="Mixed" animal="Cat" />
  </div>;
  /* return React.createElement("div", {}, [
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
  ]); */
};
const container = document.getElementById("root");
const myRoot = createRoot(container);
myRoot.render(<App />);
