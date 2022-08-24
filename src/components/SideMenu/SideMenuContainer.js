import styles from './SideMenuContainer.module.css';
import SideMenu from './SideMenu';

const SideMenuContainer = () => {
    return (
        <aside className={styles['side-menu-container']}>
            <h1 className={styles.logo} >Food App</h1>
            <SideMenu />
        </aside>
    )
};

export default SideMenuContainer;