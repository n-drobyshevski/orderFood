import AddToCartForm from './AddToCartForm';
import styles from './Item.module.css';

const Item = (props) => {
    const addToCartHandler = (amount) => {
        props.onAddToCart({id:props.id, amount:amount});
    };

    return (
        <li className={styles.item}>
            <div className={styles.mainContent}>
                <h3>{props.name}</h3>
                <p><i>{props.desc}</i></p>
                <h4 className={styles.price}>${props.price}</h4>
            </div>
            <AddToCartForm onSubmit={addToCartHandler}/>
        </li>
    )
};

export default Item;