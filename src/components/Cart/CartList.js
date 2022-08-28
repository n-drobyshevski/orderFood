import styles from './CartList.module.css';

import CartItem from './CartItem';

import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const CartList = (props) => {
    const cartCtx = useContext(CartContext);
    const classes = `${styles['cart-list']} ${props.checkout && styles.checkout}`
    return (
        <ul className={classes}>
            {cartCtx.items.map((item) => {
                return (
                    <CartItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        desc={item.description}
                        price={item.price}
                        amount={item.amount}
                        checkoutActive={props.checkout}
                    />
                );
            })}
        </ul>
    )
};

export default CartList;