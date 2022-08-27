import styles from './ItemsList.module.css';
import Item from './Item';
import Section from '../Section/Section';

const ItemsList = (props) => {
    return (
        <Section sectionTitle='Meals' className='meals'>
            <ul className={styles['items-list']}>
                {props.items.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            desc={item.description}
                            price={item.price}

                            onAddItemClick={props.onAddItemClick}
                        />
                    );
                })}
            </ul>
        </Section>
    )
};

export default ItemsList;