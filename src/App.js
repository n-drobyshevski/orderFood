import React, { useState } from "react";
// import Header from "./components/Header/Header";
import CartModal from "./components/Cart/CartModal";
import CartProvider from "./store/CartProvider";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

const testData = [
  { id: 'M1', name: 'Meal 1', description: 'some desc', price: 90.00 },
  { id: 'M2', name: 'Meal 2', description: 'some desc', price: 10.99 },
  { id: 'M6', name: 'Meal 6', description: 'some desc', price: 27.00 },
  { id: 'M5', name: 'Meal 5', description: 'some desc', price: 7.05 },
  { id: 'M3', name: 'Meal 3', description: 'some desc', price: 25.55 },
  { id: 'M4', name: 'Meal 4', description: 'some desc', price: 54.05 },
];

function App() {
  const [cartOpened, setCartOpened] = useState(false);

  const closeCartHandler = () => {
    setCartOpened(false);
  };

  const openCartHandler = () => {
    setCartOpened(true);
  };

  return (
    <CartProvider>
      {cartOpened && <CartModal onClose={closeCartHandler} />}
      <Sidebar />
      <Main data={testData} />
    </CartProvider>
  );
}

export default App;
