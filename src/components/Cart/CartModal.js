import styles from './CartModal.module.css';

import Modal from '../UI/Modal/Modal';
import CartList from './CartList';

const CartModal = (props) => {
    return(
        <Modal className={styles['cart-modal']} onClose={props.onClose} title='Cart'>
            <CartList items={props.content}/>
            <div className={styles['total-amount']}>
                <h3 className={styles['total-amount__label']}>Total Amount:</h3>
                <h3>$ {props.totalPrice}</h3>
            </div>
        </Modal>
    )
};

export default CartModal;