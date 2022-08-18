import React, { useEffect, useState, useReducer } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About"
import ItemsList from './components/Items/ItemsList'
import CartModal from "./components/Cart/CartModal";
import CartContext from "./store/cart-context";
import CartProvider from "./store/CartProvider";


const testData = [
  { id: 'M1', name: 'Meal 1', description: 'some desc', price: 90.00 },
  { id: 'M2', name: 'Meal 2', description: 'some desc', price: 10.99 },
  { id: 'M3', name: 'Meal 3', description: 'some desc', price: 25.55 },
  { id: 'M4', name: 'Meal 4', description: 'some desc', price: 54.05 },
];

const getItemById = (id) => {
  for (let item of testData) {
    if (item.id === id) {
      return item
    }
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = getItemById(action.itemId);
      return {
        totalAmount: state.totalAmount + action.amount,
        totalPrice: state.totalPrice + item.price,
        data: [...state.data, { ...item, ...{ amount: action.amount } }],
      };

    case 'STACKING_ITEM':
      return {
        totalAmount: state.totalAmount + action.amount,
        totalPrice: state.totalPrice + action.amount * getItemById(action.id).price,
        data: state.data.map(item => {
          if (item.id === action.id) {
            return { ...item, amount: item.amount + action.amount }
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

function App() {

  const [cartOpened, setCartOpened] = useState(false);

  const [cartContent, dispatchCartContent] = useReducer(cartReducer, { totalAmount: null, totalPrice: null, data: [] });

  const closeCartHandler = () => {
    setCartOpened(false);
  };

  const openCartHandler = () => {
    setCartOpened(true);
  };

  const addToCartHandler = (itemToAddData) => {
    for (let cartItem of cartContent.data) {
      if (cartItem.id === itemToAddData.id) {
        dispatchCartContent({ type: 'STACKING_ITEM', id: itemToAddData.id, amount: itemToAddData.amount });
        return;
      }
    };

    dispatchCartContent({ type: 'ADD_TO_CART', itemId: itemToAddData.id, amount: itemToAddData.amount });

  };

  useEffect(() => {
    console.log('CART UPDATED...');
    console.table(cartContent);
    console.log(cartContent);
  }, [cartContent]);

  return (
    <CartProvider>
      {cartOpened && <CartModal
        content={cartContent.data}
        totalPrice={cartContent.totalPrice}
        onClose={closeCartHandler} />}
      <Header
        cartItemsQuantity={cartContent.totalAmount}
        onCartOpen={openCartHandler} />
      <About />
      <ItemsList onAddToCart={addToCartHandler} items={testData} />
    </CartProvider>
  );
}

export default App;
