import styles from './Categories.module.css';


const categoriesData = [{ name: 'first' }, { name: 'second' }, { name: 'third' }];

const Categories = () => {
    return (
        <section className={styles.categories}>
            {categoriesData.map(category => {
                return (
                    <div className={styles.category} >
                        <p>{category.name}</p>
                    </div>
                )
            }
            )}
        </section>
    )
};

export default Categories;