import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const updatedTotalAmount = state.totalAmount + action.item.amount;
            const updatedTotalPrice = state.totalPrice + action.item.price * action.item.amount;
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            );

            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems = [...state.items];

            if (existingCartItem) {
                const updatedItem = { ...existingCartItem, amount: existingCartItem.amount + action.item.amount };

                updatedItems[existingCartItemIndex] = updatedItem;
            }
            else {
                updatedItems = state.items.concat(action.item);
            }
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                totalPrice: updatedTotalPrice,
            };

        case 'REMOVE': {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.id
            );
            const existingCartItem = state.items[existingCartItemIndex];

            const updatedTotalAmount = state.totalAmount - 1;

            const updatedTotalPrice = state.totalPrice - existingCartItem.price;
            let updatedItems;

            if (existingCartItem.amount === 1) {
                updatedItems = state.items.filter(item => item.id !== action.id)
            }
            else {
                const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount,
                totalPrice: updatedTotalPrice
            }

        }
        default:
            return defaultCartState;
    }
};


const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFormCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFormCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>

    )
};

export default CartProvider;