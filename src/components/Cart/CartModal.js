import styles from './CartModal.module.css';

import Button from '../UI/Button/Button';
import Modal from '../UI/Modal/Modal';
import CartList from './CartList';

import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import UserContext from '../../store/user-context';

import { HiLocationMarker } from 'react-icons/hi';

const CartModal = (props) => {
    const cartCtx = useContext(CartContext);
    const userCtx = useContext(UserContext);

    const [checkout, setCheckout] = useState(false);

    const classes = `${styles['cart-modal']} ${checkout && styles.checkout}`

    const checkoutSubmitHandler = () => {
        const randomId = (Math.random() * 100).toFixed();
        userCtx.updateUserOrders(randomId, cartCtx.items, userCtx.address);
    };
    if (!checkout) {
        return (
            <Modal className={classes} onClose={props.onClose} title='Cart'>
                <header>
                    <h3>Shopping Cart</h3>
                </header>
                {cartCtx.items.length ?
                    <main>
                        <CartList checkout={checkout} />
                    </main>
                    :
                    <main>
                        <i> cart is empty...</i>
                    </main>
                }

                {
                    cartCtx.items.length ?
                        <footer>
                            <div className={styles['total-amount']}>
                                <h4 className={styles['total-amount__label']}>Total Amount:</h4>
                                <h4>$ {(cartCtx.totalPrice).toFixed(2)}</h4>
                            </div>
                            <div className={styles['action-bar']}>
                                <Button onClick={() => { setCheckout(true) }}>Order</Button>
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
            </Modal >
        )
    }
    else {
        return (
            <Modal className={classes} onClose={props.onClose} title='Cart'>
                <header>
                    <h2>Order confirmation</h2>
                </header>
                <main>
                    <div className={styles['items-list-container']}>
                        <h3>Ordered Items</h3>
                        <CartList checkout={checkout} />
                    </div>
                    <div className={styles['address-container']}>
                        <h3 className={styles.title}>Your address </h3>

                        <div className={styles['address']}>
                            <div>
                                <HiLocationMarker />
                                <p>{userCtx.address.street} {userCtx.address.houseNumber}</p>
                            </div>
                            <Button onClick={props.onAddressChange}
                                size='small'
                                fill={true}>Change</Button>
                        </div>
                    </div>
                </main>
                :
                <footer>
                    <div className={styles['total-amount']}>
                        <h4 className={styles['total-amount__label']}>Total Amount:</h4>
                        <h4>$ {(cartCtx.totalPrice).toFixed(2)}</h4>
                    </div>
                    <div className={styles['action-bar']}>
                        <Button fill={true} onClick={checkoutSubmitHandler} >Submit</Button>
                        <Button onClick={() => { setCheckout(false) }}>Back</Button>
                    </div>


                </footer>
            </Modal>
        )

    }
};

export default CartModal;