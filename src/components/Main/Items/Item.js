import AddToCartForm from './AddToCartForm';
import styles from './Item.module.css';

import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

const Item = (props) => {
    const cartCtx = useContext(CartContext);

    const price = props.price.toFixed(2);

    // const addToCartHandler = (amount) => {
    //     cartCtx.addItem({
    //         id: props.id,
    //         name: props.name,
    //         amount: amount,
    //         price: price
    //     });
    // };
    const addToCartHandler = () => {
        console.log('add to cart');
    };

    return (
        <li className={styles.item}>
            <Card>
                <div className={styles['item-image']}></div>
                <div className={styles['main-content']}>
                    <div className={styles.info}>
                        <h3>{props.name}</h3>
                        {/* <p><i>{props.desc}</i></p> */}
                        <h4 className={styles.price}>${price}</h4>
                    </div>
                    <Button onClick={addToCartHandler}>Add to cart</Button>
                </div>
            </Card>
        </li>
    )
};

export default Item;