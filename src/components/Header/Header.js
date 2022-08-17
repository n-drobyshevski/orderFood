import styles from './Header.module.css';
import Button from '../UI/Button/Button';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <h1>Food</h1>
            <Button onClick={props.onCartOpen} type='button'>
                <span className={styles.icon}></span>
                Cart
                {props.cartItemsQuantity && <span className={styles.badge}>{props.cartItemsQuantity}</span>}
            </Button>
        </div>
    );
};

export default Header;