import styles from './SidebarCartItem.module.css';

const SidebarCartItem = props => {
    return (
        <div className={styles['sidebar-cart-item']}>
            {/* <div className={styles.image}>< /div> */}
            <div className={styles['main-info']}>

                <h5>{props.name}</h5>
                <p>x{props.amount}</p>

            </div>
            <div className={styles.amount}>
                <h5 className={styles.price} >${props.price}</h5>
            </div>
        </div>
    )
};

export default SidebarCartItem;