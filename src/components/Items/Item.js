import AddToCartForm from './AddToCartForm';
import styles from './Item.module.css';

import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Item = (props) => {
    const cartCtx = useContext(CartContext);

    const price = props.price.toFixed(2);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: price
        });
    };

    return (
        <li className={styles.item}>
            <div className={styles.mainContent}>
                <h3>{props.name}</h3>
                <p><i>{props.desc}</i></p>
                <h4 className={styles.price}>${price}</h4>
            </div>
            <AddToCartForm id={props.id} onSubmit={addToCartHandler} />
        </li>
    )
};

export default Item;