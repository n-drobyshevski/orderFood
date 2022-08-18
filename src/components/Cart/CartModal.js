import styles from './CartModal.module.css';

import Modal from '../UI/Modal/Modal';
import CartList from './CartList';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const CartModal = (props) => {
    const cartCtx = useContext(CartContext);
    return (
        <Modal className={styles['cart-modal']} onClose={props.onClose} title='Cart'>
            <CartList items={props.content} />
            <div className={styles['total-amount']}>
                <h3 className={styles['total-amount__label']}>Total Amount:</h3>
                <h3>$ {(cartCtx.totalPrice).toFixed(2)}</h3>
            </div>
        </Modal>
    )
};

export default CartModal;