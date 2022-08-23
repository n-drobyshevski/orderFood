import styles from './Main.module.css';
import About from './About/About';
import ItemsList from './Items/ItemsList';
import Categories from './Categories/Categories';

const Main = props => {
    return (
        <main className={styles.main}>
            <About />
            <Categories />
            <ItemsList items={props.data} />
        </main >
    )
};

export default Main;