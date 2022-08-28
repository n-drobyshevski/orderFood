import styles from './ItemsList.module.css';
import Item from './Item';
import Section from '../Section/Section';

import sendRequest from '../../../infra/http/http-client';

import { useState, useEffect } from 'react';


const databaseUrl = 'https://react-test-app-f0750-default-rtdb.europe-west1.firebasedatabase.app/items.json';

const ItemsList = (props) => {

    const [availableItems, setAvailableItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch(databaseUrl);
            const data = await response.json();

            const loadedItems = [];
            for (const key in data) {
                loadedItems.push({
                    id: key,
                    name: data[key].name,
                    price: data[key].price,
                    description: data[key].description
                });
            }
            setAvailableItems(loadedItems);
        }
        fetchItems();
    }, []);


    return (
        <Section sectionTitle='Meals' className='meals'>
            <ul className={styles['items-list']}>

                {availableItems.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            desc={item.description}
                            price={item.price}

                            onAddItemClick={props.onAddItemClick}
                        />
                    );
                })}
            </ul>
        </Section>
    )
};

export default ItemsList;