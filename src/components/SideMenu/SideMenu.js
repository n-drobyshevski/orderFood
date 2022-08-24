import styles from './SideMenu.module.css';

import SideMenuItem from './SideMenuItem';

import { HiHome, HiShoppingCart, HiHeart, HiClock, HiCog } from 'react-icons/hi';
const menuItems = [
    { id: '1', name: 'Main', icon: HiHome },
    { id: '2', name: 'Food order', icon: HiShoppingCart },
    { id: '3', name: 'Favorite', icon: HiHeart },
    { id: '4', name: 'Order history', icon: HiClock },
    { id: '5', name: 'Settings', icon: HiCog },
];

const SideMenu = () => {
    return (
        <section className={styles.menu}>
            {menuItems.map(item => {
                let highlighted = false;
                if (item.name === 'Main') {
                    highlighted = true;
                };
                return (
                    <SideMenuItem
                        key={item.id}
                        highlighted={highlighted}
                        name={item.name}>
                        < item.icon fill={''} />
                    </SideMenuItem>)
            })}
        </section>
    );
};

export default SideMenu;