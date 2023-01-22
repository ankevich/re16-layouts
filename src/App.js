import products from "./products";
import CardsView from "./components/CardsView";
import ListView from "./components/ListView";
import IconSwitch from "./components/IconSwitch";
import "./App.css";
import { useState } from "react";
import styled from "styled-components";

function App() {
  return <Store />;
}

const Store = () => {
  const [state, setState] = useState("list");
  const toggleState = () => {
    state === "cards" ? setState("list") : setState("cards");
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
