import styles from './Header.module.css';
import Button from '../../UI/Button/Button';

import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

import { MdShoppingCart } from "react-icons/md";

const Header = (props) => {
    const cartCtx = useContext(CartContext);
    return (
        <header className={styles.header}>
            <h1>Page Title</h1>
            <Button
                className='icon-button'
                onClick={props.onCartOpen}
                type='button'>
                <MdShoppingCart />
                Cart
                {cartCtx.totalAmount !== 0 && <span className={styles.badge}>{cartCtx.totalAmount}</span>}
            </Button>
        </header >
    );
};

export default Header;