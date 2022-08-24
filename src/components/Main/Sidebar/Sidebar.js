import styles from './Sidebar.module.css';
import AddressCart from './SidebarAddress/AddressCart';

import SidebarCart from './SidebarCart/SidebarCart';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <AddressCart />
            <SidebarCart />
        </aside>
    );
};

export default Sidebar;