import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside>
            <section className={styles.menu}>
                <div className={styles['menu-item']}>
                    <h5>Main</h5>
                </div>
                <div className={styles['menu-item']}>
                    <h5>Profile</h5>
                </div>
                <div className={styles['menu-item']}>
                    <h5>Cart</h5>
                </div><div className={styles['menu-item']}>
                    <h5>Order history</h5>
                </div>
            </section>
        </aside>
    )
};

export default Sidebar;