import React, { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About"
import ItemsList from './components/Items/ItemsList'
import CartModal from "./components/Cart/CartModal";

function App() {
  const testData = [
    { id: 'M1', name: 'Meal 1', description: 'some desc', price: '$90.00' },
    { id: 'M2', name: 'Meal 2', description: 'some desc', price: '$10.99' },
    { id: 'M3', name: 'Meal 3', description: 'some desc', price: '$25.55' },
    { id: 'M4', name: 'Meal 4', description: 'some desc', price: '$54.05' },
  ];

  const [cartOpened, setCartOpened] = useState(false);

  const [cartContent, setCartContent] = useState([]);

  const closeCartHandler = () => {
    setCartOpened(false);
  };

  const openCartHandler = () => {
    setCartOpened(true);
  };
  const addToCartHandler = (itemData) => {

    let item = {};
    for (const elem of testData) {
      if (elem.id === itemData.id) {
        item = elem;
        break;
      }
    }
    const newCartItem = { data: item, amount: itemData.amount };

    setCartContent(prevState => {
      return ([...prevState, newCartItem])
    });

    console.log('Item added to cart');

  };

  return (
    <React.Fragment>
      {cartOpened && <CartModal content={cartContent} onClose={closeCartHandler} />}
      <Header onCartOpen={openCartHandler} />
      <About />
      <ItemsList onAddToCart={addToCartHandler} items={testData} />
    </React.Fragment>
  );
}

export default App;
