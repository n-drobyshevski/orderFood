import styles from './SidebarCart.module.css';

import SidebarCartItem from './SidebarCartItem';
import Button from '../../../UI/Button/Button';
import Card from '../../../UI/Card/Card';

const menuItems = [];

const SidebarCart = () => {
    return (
        <div className={styles['sidebar-cart']}>
            <Card className={styles['sidebar-cart-content']}>
                <h4>Cart</h4>

                <div>
                    {menuItems.map(item => {
                        <SidebarCartItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            amount={item.amount}
                        />
                    })}
                </div>

                <div className={styles.total}>

                </div>
            </Card>

            <Button className='fill' >Checkout</Button>
        </div>
    )
};

export default SidebarCart;