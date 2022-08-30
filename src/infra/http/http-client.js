// get items 
// import { useState } from 'react';

const composeUrl = (name) => {
    return `https://react-test-app-f0750-default-rtdb.europe-west1.firebasedatabase.app/${name}.json`;

};
const sendRequest = (urlName, applyFn) => {

    const fetchData = async () => {
        const response = await fetch(composeUrl(urlName));
        const data = await response.json();
        applyFn(data)
    };

    fetchData();
};

export default sendRequest;