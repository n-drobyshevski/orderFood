import styles from './CartModal.module.css';

import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import CartList from './CartList';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const CartModal = (props) => {
    const cartCtx = useContext(CartContext);
    return (
        <Modal className={styles['cart-modal']} onClose={props.onClose} title='Cart'>
            <header>
                <h3>Shopping Cart</h3>
            </header>
            {cartCtx.items.length ?
                <main>
                    <CartList />
                </main>
                :
                <main>
                    <i> cart is empty...</i>
                </main>
            }

            {cartCtx.items.length ?
                <footer>
                    <div className={styles['total-amount']}>
                        <h3 className={styles['total-amount__label']}>Total Amount:</h3>
                        <h3>$ {(cartCtx.totalPrice).toFixed(2)}</h3>
                    </div>
                    <div className={styles['action-bar']}>
                        <Button>Order</Button>
                        <Button onClick={props.onClose}>Close</Button>
                    </div>

                </footer>
                :
                <footer>
                    <div className={styles['action-bar']}>
                        <Button onClick={props.onClose}>Close</Button>
                    </div>
                </footer>
            }
        </Modal>
    )
};

export default CartModal;