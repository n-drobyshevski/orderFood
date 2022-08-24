import styles from './SideMenuItem.module.css';

const SideMenuItem = props => {
    return (
        <div className={`${styles['menu-item']} ${props.highlighted && styles.highlighted}`}>
            {props.children}
            <h5>{props.name}</h5>
        </div>
    );
};

export default SideMenuItem;
