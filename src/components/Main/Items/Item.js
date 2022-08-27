// import AddToCartForm from './AddToCartForm';
import styles from './Item.module.css';

// import { useContext } from 'react';
// import CartContext from '../../../store/cart-context';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

import { HiOutlinePlus } from 'react-icons/hi';
const Item = (props) => {
    // const cartCtx = useContext(CartContext);

    const price = props.price.toFixed(2);

    // const addToCartHandler = (amount) => {
    //     cartCtx.addItem({
    //         id: props.id,
    //         name: props.name,
    //         amount: amount,
    //         price: price
    //     });
    // };
    const addItemClickHandler = () => {
        console.log('add item');
        props.onAddItemClick();
    };

    return (
        <li className={styles.item}>
            <Card>
                <div className={styles['item-image']}></div>
                <div className={styles['main-content']}>
                    <div className={styles.info}>
                        <h4>{props.name}</h4>
                        {/* <p><i>{props.desc}</i></p> */}
                        <h5 className={styles.price}>${price}</h5>
                    </div>
                    <Button size='large' fill={true} onClick={addItemClickHandler}><HiOutlinePlus /></Button>
                </div>
            </Card>
        </li >
    )
};

export default Item;