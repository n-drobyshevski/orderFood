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
};

const updateAddressData = (data) => {
    fetch(databaseUrl, {
        method: "PUT",
        headers: {
            'content-type': 'application.json'
        },
        body: JSON.stringify(data),
    });
};

const addressReducer = (state, action) => {
    switch (action.type) {
        case 'SET':
            return action.data;
        case 'UPDATE':
            const updatedState = { ...state };
            for (const key in updatedState) {
                if (key === action.key) {
                    updatedState[key] = action.value
                }
            };
            updateAddressData(updatedState);
            return updatedState;
    };

    return defaultUserState;
};

const UserProvider = props => {

    const [userState, dispatchUserAction] = useReducer(addressReducer, defaultUserState);

    const updateUserHandler = (key, newValue) => {
        console.log('update user context')
        dispatchUserAction({ type: 'UPDATE', key: key, value: newValue });
    };

    useEffect(() => {
        // const fetchUserData = () => {
        //     fetch(databaseUrl, {
        //         method: "POST",
        //         headers: {
        //             'content-type': 'application.json'
        //         },
        //         body: JSON.stringify(userState),
        //     });
        //     // const data = await response.json();
        //     // console.log(data)
        //     // dispatchUserAction({ type: 'SET', data: data })
        // };
        // fetchUserData();
    }, [userState]);

    useEffect(() => {
        const getUserData = async () => {
            const response = await fetch(databaseUrl);
            const data = await response.json();
            const newData = {};
            for (const key in data) {
                console.log(data[key]);
                newData[key] = data[key];
            }
            console.log(newData);
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
        updateUser: updateUserHandler,

    };
    return (
        <UserContext.Provider value={userContext}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;