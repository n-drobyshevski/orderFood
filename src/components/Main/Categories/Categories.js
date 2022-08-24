import styles from './Categories.module.css';

import Section from '../Section/Section';
import Category from './Category';

const categoriesData = [
    { id: '01', name: 'Bakery' },
    { id: '02', name: 'Seafood' },
    { id: '03', name: 'Pizza' },
    { id: '05', name: 'Burgers' },
    { id: '06', name: 'Beverage' },
    { id: '04', name: 'Chicken' }];

const Categories = () => {
    return (
        <Section className={'categories'} sectionTitle='Categories'>
            <div className={styles.categories}>
                {categoriesData.map(category => {
                    return (
                        <Category key={category.id} name={category.name} />
                    )
                }
                )}
            </div>
        </Section>
    )
};

export default Categories;