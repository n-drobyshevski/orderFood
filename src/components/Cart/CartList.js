import styles from './CartList.module.css';

import Card from '../UI/Card/Card';
import CartItem from './CartItem';

const CartList = (props) => {
    return (
        <Card className={styles.itemsList}>
            <ul>
                {props.items.map((item) => {
                    return (
                        <CartItem
                            key={item.id}
                            name={item.name}
                            desc={item.description}
                            price={item.price}
                        />
                    );
                })}
            </ul>
        </Card>
    )
};

export default CartList;