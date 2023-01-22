import products from "./products";
import CardsView from "./CardsView";
import ListView from "./ListView";
import "./App.css";


const IconSwitch = () => {
  return <span className="material-icons">list</span>;
};

function App() {
  return <>
  <IconSwitch/>
  <ListView products={products}/></>
}

export default App;
