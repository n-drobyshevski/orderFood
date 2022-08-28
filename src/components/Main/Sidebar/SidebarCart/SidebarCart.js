import styles from './SidebarCart.module.css';

import SidebarCartItem from './SidebarCartItem';
import Button from '../../../UI/Button/Button';
import Card from '../../../UI/Card/Card';

import { useContext } from 'react';
import CartContext from '../../../../store/cart-context';


const SidebarCart = () => {
    const cartCtx = useContext(CartContext);

    return (
        <div className={styles['sidebar-cart']}>
            <Card className={styles['sidebar-cart-content']}>
                <h4>Cart</h4>

                <div className={styles['sidebar-items']}>
                    {cartCtx.items.map(item => {
                        return (
                            <SidebarCartItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                amount={item.amount}
                            />)
                    })}
                </div>

                <div className={styles.total}>
                    <h4>Total Price:</h4>
                    <h4>${cartCtx.totalPrice.toFixed(2)}</h4>
                </div>
            </Card>

            <Button fill={true} >Checkout</Button>
        </div>
    )
};

export default SidebarCart;