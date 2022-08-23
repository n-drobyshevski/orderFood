import styles from './Header.module.css';
import Button from '../UI/Button/Button';

import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Header = (props) => {
    const cartCtx = useContext(CartContext);
    return (
        <header className={styles.header}>
            <h1>Food</h1>
            <Button onClick={props.onCartOpen} type='button'>
                <span className={styles.icon}></span>
                Cart
                {cartCtx.totalAmount !== 0 && <span className={styles.badge}>{cartCtx.totalAmount}</span>}
            </Button>
        </header>
    );
};

export default Header;