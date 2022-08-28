// get items 
// import { useState } from 'react';

const databaseUrl = 'https://react-test-app-f0750-default-rtdb.europe-west1.firebasedatabase.app/items.json';

const sendRequest = async () => {
    try {
        const response = await fetch(databaseUrl);
        if (!response.ok) { throw new Error('something went wrong') }
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
        // console.log(loadedItems)
        return loadedItems
    }
    catch (error) {
        console.log(error.message)
    }
    // post items
};

export default sendRequest;