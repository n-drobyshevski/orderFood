import React from "react";

const UserContext = React.createContext({
    address: {
        city: '',
        postalCode: 0,
        street: '',
        houseNumber: 0,
    },
    orders: {
        id:
        {
            items: [],
            address: {},
            time: '',
        }
    },
    updateUserAddress: (newValue) => { },
    updateUserOrders: (id, items, address) => { },
});

export default UserContext;