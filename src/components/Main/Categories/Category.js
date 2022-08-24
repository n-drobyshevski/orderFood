import styles from './Category.module.css';

const Category = props => {
    let highlighted = false;
    if (props.name === 'Bakery') {
        highlighted = true;
    };
    return (
        <div className={`${styles.category} ${highlighted && styles.highlighted}`} >
            <div className={styles['category-icon']}></div>
            <p className={styles['category-name']}>{props.name}</p>
        </div>
    )
};

export default Category;