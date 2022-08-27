import styles from './ProductModal.module.css';

import { useState } from 'react';

import Modal from '../UI/Modal/Modal';

import { HiOutlinePlus, HiOutlineMinus, HiOutlineX } from 'react-icons/hi';
import Button from '../UI/Button/Button';
const ProductModal = (props) => {
    const [productAmount, setProductAmount] = useState(1);
    const totalPrice = 0;

    const closeHandler = () => {
        console.log('close');
        props.onClose();
    };
    return (
        <Modal
            className={styles['product-modal']}
            onClose={closeHandler}>
            <Button
                className={styles['close-button']}
                onClick={closeHandler}
                icon="without-text"
                noBorder={true}>
                <HiOutlineX />
            </Button>

            <div className={styles['product-image']}></div>

            <div className={styles['main-content']}>
                <div className={styles['main-info']}>
                    <h3>{props.productName} Product Name</h3>
                    <h4 className={styles.price}>{props.price} $25.99</h4>
                </div>
                <div className={styles['additional-info']}>
                    <h5>Description</h5>
                    <p>Information about product</p>
                </div>
                <div className={styles['amount-form']}>
                    <h5>Quantity</h5>
                    <div className={styles['amount-form-controls']}>
                        <HiOutlineMinus />
                        {productAmount}
                        <HiOutlinePlus />
                    </div>
                </div>

                <div className={styles.summary}>
                    <div className={styles['total-price']}>
                        <h4>Total price:</h4>
                        <h4>${totalPrice}</h4>
                    </div>
                    <Button fill={true}>Add to cart</Button>
                </div>
            </div>
        </Modal>
    )
};

export default ProductModal;