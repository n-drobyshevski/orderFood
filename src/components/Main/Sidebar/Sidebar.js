import styles from './Sidebar.module.css';
import AddressCart from './SidebarAddress/AddressCart';

import SidebarCart from './SidebarCart/SidebarCart';

import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

const Sidebar = () => {
    const cartCtx = useContext(CartContext);
    return (
        <aside className={styles.sidebar}>
            <AddressCart />
            {cartCtx.items.length > 0 && <SidebarCart />}

        </aside>
    );
};

export default Sidebar;