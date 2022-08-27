import styles from './Main.module.css';
import Banner from './Banner/Banner';
import ItemsList from './Items/ItemsList';
import Categories from './Categories/Categories';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
const Main = props => {
    return (
        <main className={styles.main}>

            <Header
            // onCartOpen={openCartHandler} /
            />
            <div className={styles['main-content']}>
                <Banner />
                <Categories />
                <ItemsList onAddItemClick={props.onAddItemClick} items={props.data} />

            </div>
            <Sidebar />
        </main >
    )
};

export default Main;