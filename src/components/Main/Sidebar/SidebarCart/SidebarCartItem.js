import styles from './SidebarCartItem.module.css';

const SidebarCartItem = props => {
    return (
        <div className={styles['sidebar-cart-item']}>
            <div className={styles['info-main']}>
                <h4>{props.name}</h4>
                <h5 className={styles.price} >${props.price}</h5>

            </div>
            <div className={styles.amount}>
                <p>{props.amount}</p>
            </div>
        </div>
    )
};

export default SidebarCartItem;