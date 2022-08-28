import { useState, useEffect, useContext } from 'react';

import styles from './ProductModal.module.css';

import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';

import CartContext from '../../store/cart-context';

import { HiOutlinePlus, HiOutlineMinus, HiOutlineX } from 'react-icons/hi';

const ProductModal = (props) => {
    const [productAmount, setProductAmount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(props.item.price);

    const cartCtx = useContext(CartContext);

    useEffect(() => {
        setTotalPrice(productAmount * props.item.price);
    }, [productAmount, totalPrice, props.item.price]);

    const increaseItemsQuantity = () => {
        setProductAmount((prevAmount) => { return (prevAmount + 1) })
    };

    const decreaseItemsQuantity = () => {
        setProductAmount((prevAmount) => {
            if (prevAmount > 1) {
                return (prevAmount - 1)
            }
            else {
                return prevAmount
            }
        })
    };

    const addToCartHandler = () => {
        cartCtx.addItem({ ...props.item, amount: productAmount });
        props.onClose();
    };

    return (
        <Modal
            className={styles['product-modal']}
            onClose={props.onClose}>
            <Button
                className={styles['close-button']}
                onClick={props.onClose}
                icon="without-text"
                noBorder={true}>
                <HiOutlineX />
            </Button>

            <div className={styles['product-image']}></div>

            <div className={styles['main-content']}>
                <div className={styles['main-info']}>
                    <h3>{props.item.name} </h3>
                    <h4 className={styles.price}>${props.item.price}</h4>
                </div>
                <div className={styles['additional-info']}>
                    <h5>Description</h5>
                    <p>Information about product</p>
                </div>

                <div className={styles['amount-form']}>
                    <h5>Quantity</h5>
                    <div className={styles['amount-form-controls']}>
                        <button className={`${styles['amount-button-left']}`} onClick={decreaseItemsQuantity}>
                            <HiOutlineMinus onClick={decreaseItemsQuantity} />
                        </button>
                        <p>{productAmount}</p>

                        <button className={`${styles['amount-button-right']}`} onClick={increaseItemsQuantity}>
                            <HiOutlinePlus />
                        </button>

                    </div>
                </div>

                <div className={styles.summary}>
                    <div className={styles['total-price']}>
                        <h4>Total price:</h4>
                        <h4>${totalPrice}</h4>
                    </div>
                    <Button onClick={addToCartHandler} fill={true}>Add to cart</Button>
                </div>
            </div>
        </Modal >
    )
};

export default ProductModal;