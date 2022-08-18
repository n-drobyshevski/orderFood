import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Button from '../UI/Button/Button';
import styles from './CartItem.module.css';

const CartItem = (props) => {
    const cartCtx = useContext(CartContext);
    const addItemHandler = () => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: props.amount
        });

    };
    const removeItemHandler = () => {
        cartCtx.removeItem(props.id);
    };
    return (
        // refactor item component
        <li className={styles['cart-item']}>
            <div className={styles.info}>
                <div className={styles['info-main']}>
                    <h4>{props.name}</h4>
                    <h5 className={styles.price} >${props.price}</h5>

                </div>
                <div className={styles.amount}>
                    <p>{props.amount}</p>
                </div>
            </div>

            <div className={styles['button-group']}>
                <Button onClick={addItemHandler}>+</Button>
                <Button onClick={removeItemHandler}>-</Button>
            </div>
        </li>
    )
};

export default CartItem;
