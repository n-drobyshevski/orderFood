import Button from '../UI/Button/Button';
import styles from './CartItem.module.css';

const CartItem = (props) => {
    return (
        // refactor item component
        <li>
            <div className={styles.info}>
                <div className={styles['info-main']}>
                    <h4>{props.name}</h4>
                    <h5 className={styles.price} >${props.price}</h5>

                </div>
                <div className={styles.amount}>
                    <p>x {props.amount}</p>
                </div>
            </div>

            <div className={styles['button-group']}>
                <Button>+</Button>
                <Button>-</Button>
            </div>
        </li>
    )
};

export default CartItem;
