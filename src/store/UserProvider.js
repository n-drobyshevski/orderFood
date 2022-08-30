import { useReducer, useEffect } from "react";
import UserContext from "./user-context";

const databaseUrl = 'https://react-test-app-f0750-default-rtdb.europe-west1.firebasedatabase.app/user-data.json';

const defaultUserState = {
    address: {
        city: '',
        postalCode: 0,
        street: '',
        houseNumber: 0,
    },
    orders: {
        id: {
            items: [],
            address: {},
            time: ''
        }
    },
};

const updateUserData = (data) => {
    fetch(databaseUrl, {
        method: "PUT",
        headers: {
            'content-type': 'application.json'
        },
        body: JSON.stringify(data),
    });
};

const userDataReducer = (state, action) => {
    switch (action.type) {
        case 'SET': {
            return action.data;
        }
        case 'UPDATE_ADDRESS': {
            const updatedState = { ...state };
            updatedState.address = action.value;
            updateUserData(updatedState);
            return updatedState;
        }
        case 'UPDATE_ORDERS': {
            const orderDate = new Date();
            const orderTime = orderDate.toLocaleTimeString();
            const updatedState = { ...state };
            const newOrder = { address: action.address, items: action.items, time: orderTime }
            updatedState.orders = { ...updatedState.orders, ...{ [action.id]: newOrder } }
            updateUserData(updatedState);
            return updatedState;
        }
        default: {
            return defaultUserState;
        }
    };

};

const UserProvider = props => {

    const [userState, dispatchUserAction] = useReducer(userDataReducer, defaultUserState);

    const updateUserAddress = (newValue) => {
        dispatchUserAction({ type: 'UPDATE_ADDRESS', value: newValue });
    };

    const updateUserOrders = (id, items, address) => {
        dispatchUserAction({ type: 'UPDATE_ORDERS', id: id, items: items, address: address });
    };

    useEffect(() => {
        const getUserData = async () => {
            const response = await fetch(databaseUrl);
            const data = await response.json();
            const newData = {};
            for (const key in data) {
                newData[key] = data[key];
            }
            dispatchUserAction({ type: "SET", data: newData });
        };
        getUserData();
    }, []);

    const userContext = {
        address: {
            city: userState.address.city,
            postalCode: userState.address.postalCode,
            street: userState.address.street,
            houseNumber: userState.address.houseNumber,
        },
        orders: {
            id: {
                items: [],
                address: {},
                time: '',
            }
        },
        updateUserAddress: updateUserAddress,
        updateUserOrders: updateUserOrders,

    };

    return (
        <UserContext.Provider value={userContext}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;