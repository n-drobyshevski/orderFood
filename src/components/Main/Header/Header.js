import styles from './Header.module.css';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

// import { useContext } from 'react';
// import CartContext from '../../../store/cart-context';

import { HiOutlineCog, HiSearch, HiShoppingCart, HiOutlineBell } from "react-icons/hi";

const Header = (props) => {
    // const cartCtx = useContext(CartContext);
    return (
        <header className={styles.header}>
            <div className={styles.main}>

                <h2>Page Title</h2>
                <Input
                    withIcon={true}
                    input={{
                        type: 'text',
                        placeholder: 'What do you want to eat today?'
                    }}>
                    <HiSearch />
                </Input>
            </div>
            <div className={styles.aside}>
                <Button
                    icon='before'
                    onClick={props.onCartOpen}
                    type='button'
                >
                    <HiShoppingCart />
                    Cart
                    {/* {cartCtx.totalAmount !== 0 && <span className={styles.badge}>{cartCtx.totalAmount}</span>} */}
                </Button>
                <Button icon='without-text' type='button'><HiOutlineCog /></Button>
                <Button icon='without-text' type='button'><HiOutlineBell /></Button>
            </ div>
        </header >
    );
};

export default Header;