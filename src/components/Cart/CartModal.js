import './CartModal.module.css';

import Modal from '../UI/Modal/Modal';

const CartModal = (props) => {
    return(
        <Modal onClose={props.onClose} title='Cart'>
            
        </Modal>
    )
};

export default CartModal;