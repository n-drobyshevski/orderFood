import React, {useState} from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About"
import ItemsList from './components/Items/ItemsList'
import CartModal from "./components/Cart/CartModal";

function App() {
  const testData = [
    {id:'M1',name: 'Meal 1', description:'some desc', price:'$90.00'},
    {id:'M2',name: 'Meal 2', description:'some desc', price:'$10.99'},
    {id:'M3',name: 'Meal 3', description:'some desc', price:'$25.55'},
    {id:'M4',name: 'Meal 4', description:'some desc', price:'$54.05'},
  ];

  const [cartOpened, setCartOpened] = useState(true);

  return (
  <React.Fragment>
    { cartOpened && <CartModal />}
    <Header />
    <About />
    <ItemsList items={testData}/>
  </React.Fragment>    
  );
}

export default App;
