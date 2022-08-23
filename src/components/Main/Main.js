import styles from './Main.module.css';
import About from './About/About';
import ItemsList from './Items/ItemsList';
import Categories from './Categories/Categories';
import Header from './Header/Header';
const Main = props => {
    return (
        <main className={styles.main}>

            <Header
            // onCartOpen={openCartHandler} /
            />
            <div className={styles['main-content']}>
                <About />
                <Categories />
                <ItemsList items={props.data} />
            </div>
        </main >
    )
};

export default Main;