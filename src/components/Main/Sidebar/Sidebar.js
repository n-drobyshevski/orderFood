import styles from './Sidebar.module.css';
import AddressCard from './SidebarAddress/AddressCard';

import SidebarCart from './SidebarCart/SidebarCart';

import CartContext from '../../../store/cart-context';
import { useContext } from 'react';

const Sidebar = (props) => {
    const cartCtx = useContext(CartContext);
    return (
        <aside className={styles.sidebar}>
            <AddressCard onChangeAddress={props.onChangeAddress} />
            {cartCtx.items.length > 0 && <SidebarCart onCheckoutClick={props.onCheckoutClick} />}

        </aside>
    );
};

export default Sidebar;