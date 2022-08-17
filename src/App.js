import React, { useEffect, useState, useReducer } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About"
import ItemsList from './components/Items/ItemsList'
import CartModal from "./components/Cart/CartModal";


const testData = [
  { id: 'M1', name: 'Meal 1', description: 'some desc', price: '$90.00' },
  { id: 'M2', name: 'Meal 2', description: 'some desc', price: '$10.99' },
  { id: 'M3', name: 'Meal 3', description: 'some desc', price: '$25.55' },
  { id: 'M4', name: 'Meal 4', description: 'some desc', price: '$54.05' },
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
      return [...state,  { ...item, ...{ amount: action.amount } }];
    default:
      return state;
  }
};

function App() {

  const [cartOpened, setCartOpened] = useState(false);

  const [cartContent, dispatchCartContent] = useReducer(cartReducer, []);

  const closeCartHandler = () => {
    setCartOpened(false);
  };

  const openCartHandler = () => {
    setCartOpened(true);
  };

  const addToCartHandler = (itemToAddData) => {


    // for (let cartItem of cartContent) {
    //   if (cartItem.id === itemToAddData.id) { // verifying if item is already in cart

    //     setCartContent(prevState => {
    //       prevState.map(item => {
    //         if (cartItem.id === itemToAddData.id) {
    //           item = { ...item, ...{ amount: item.amount + itemToAddData.amount } };
    //         };
    //       });
    //       console.log(prevState)
    //       return prevState;
    //     });

    //   }
    //   return;
    // }


    // getting item data from testData 
    dispatchCartContent({ type: 'ADD_TO_CART', itemId: itemToAddData.id, amount: itemToAddData.amount })
    // setCartContent(prevState => {
    //   return ([...prevState, newCartItem])
    // });

  };

  useEffect(() => {
    console.log('CART UPDATED...');
    console.table(cartContent);
    console.log(cartContent);
  }, [cartContent]);

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
