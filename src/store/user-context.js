import React from "react";

const UserContext = React.createContext({
    address: {
        city: '',
        postalCode: 0,
        street: '',
        houseNumber: 0,
    },
    updateAddress: (key, newValue) => { },
});

export default UserContext;