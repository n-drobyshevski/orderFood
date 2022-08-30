import React, { useState } from "react";

import CartModal from "./components/Cart/CartModal";
import ProductModal from "./components/ProductModal/ProductModal";
import SideMenuContainer from "./components/SideMenu/SideMenuContainer";
import Main from "./components/Main/Main";

import CartProvider from "./store/CartProvider";
import UserProvider from "./store/UserProvider";
import AddressModal from "./components/AddressModal/AddressModal";


function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [addressModalOpened, setAddressModalOpened] = useState(false);
  const [productModalOpened, setProductModalOpened] = useState(false);
  const [currentItemInformation, setCurrentItemInformation] = useState({});

  const closeProductModalHandler = () => {
    setProductModalOpened(false);
  };

  const openProductModalHandler = (itemData) => {
    setCurrentItemInformation(itemData);
    setProductModalOpened(true);
  };


  const closeCartHandler = () => {
    setCartOpened(false);
  };

  const openCartHandler = () => {
    setCartOpened(true);
  };

  const openAddressModalHandler = () => {
    setAddressModalOpened(true);
  };

  const closeAddressModalHandler = () => {
    setAddressModalOpened(false);
  };

  return (
    <UserProvider >
      <CartProvider>
        {cartOpened && <CartModal onAddressChange={openAddressModalHandler} onClose={closeCartHandler} />}
        {addressModalOpened && <AddressModal onClose={closeAddressModalHandler} />}
        {productModalOpened && <ProductModal item={currentItemInformation} onClose={closeProductModalHandler} />}
        <SideMenuContainer />
        <Main
          onAddItemClick={openProductModalHandler}
          onCartOpen={openCartHandler}
          onCheckoutClick={openCartHandler}
          onChangeAddress={openAddressModalHandler}
        />
      </CartProvider>
    </UserProvider>
  );
}

export default App;
