import AddToCartForm from './AddToCartForm';
import styles from './Item.module.css';

const Item = (props) => {
    return (
        <li>
            <div className={styles.mainContent}>
                <h3>{props.name}</h3>
                <p><i>{props.desc}</i></p>
                <h4 className={styles.price} >{props.price}</h4>
            </div>
            <AddToCartForm />
        </li>
    )
};

export default Item;