import './CartModal.module.css';

import Modal from '../UI/Modal/Modal';
import CartList from './CartList';

const CartModal = (props) => {
    return(
        <Modal onClose={props.onClose} title='Cart'>
            <CartList items={props.content}/>
        </Modal>
    )
};

export default CartModal;