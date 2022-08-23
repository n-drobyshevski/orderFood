import styles from './Sidebar.module.css';
import SideMenu from './SideMenu';

const Sidebar = () => {
    return (
        <aside>
            <h1 className={styles.logo} >Food App</h1>
            <SideMenu />
        </aside>
    )
};

export default Sidebar;