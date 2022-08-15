import './CartItem.module.css';

const CartItem = (props) => {
    return (
        // refactor item component
        <li>
            <h3>{props.name}</h3>
            <p><i>{props.desc}</i></p>
            <h4 className={styles.price} >{props.price}</h4>
        </li>
    )
};

export default CartItem;
