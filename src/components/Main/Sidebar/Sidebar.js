import styles from './Sidebar.module.css';

import SidebarCart from './SidebarCart/SidebarCart';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <SidebarCart />
        </aside>
    );
};

export default Sidebar;