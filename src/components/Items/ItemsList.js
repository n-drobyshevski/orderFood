import styles from './ItemsList.module.css';

import Card from '../UI/Card/Card';
import Item from './Item';

const ItemsList = (props) => {
    return (
        <Card className={styles.itemsList}>
            <ul>
                {props.items.map((item) => {
                    return (
                        <Item
                            onAddToCart={props.onAddToCart}
                            key={item.id}
                            id={item.id}
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

export default ItemsList;