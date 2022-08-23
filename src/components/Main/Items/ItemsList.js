import styles from './ItemsList.module.css';
import Card from '../../UI/Card/Card';
import Item from './Item';

const ItemsList = (props) => {
    return (
        <section>
            <ul className={styles['items-list']}>
                {props.items.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            desc={item.description}
                            price={item.price}
                        />
                    );
                })}
            </ul>
        </section>
    )
};

export default ItemsList;