import products from "./products";
import CardsView from "./components/CardsView";
import ListView from "./components/ListView";
import IconSwitch from "./components/IconSwitch";
import "./App.css";
import { useState } from "react";

function App() {
  return <Store />;
}

const Store = () => {
  const [state, setState] = useState("list");
  const toggleState = () => {
    if (state === "cards") {
      setState("list");
    } else setState("cards");
  };
  return (
    <>
      <IconSwitch switcher={toggleState} />
      {state === "cards" ? (
        <CardsView products={products} />
      ) : (
        <ListView products={products} />
      )}
    </>
  );
};

export default App;
