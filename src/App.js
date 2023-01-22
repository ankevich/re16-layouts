import products from "./products";
import CardsView from "./components/CardsView";
import ListView from "./components/ListView";
import IconSwitch from "./components/IconSwitch";
import "./App.css";

function App() {
  return <Store />;
}

const Store = () => {
  return (
    <>
      <IconSwitch />
      <ListView products={products} />
    </>
  );
};

export default App;
