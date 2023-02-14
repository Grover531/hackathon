import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'

export const DataProvider = createContext("")


function Data({ children }) {

    const url = "https://jsonplaceholder.typicode.com/users";

    const [api, setApi] = useState([]);

    const [logged, setLogged] = useState(false)

    const [email, setEmail] = useState('example@email.com');

    const [password, setPassword] = useState('*************** ');

    const tempValue = {
        email: 'yousyogue@gmail.com',
        password: 'Test1234'
    }

    console.log(api);

    const fetch = () => {
        axios.get(url).then((res) => {
            setApi(res.data);
        });
    };

    useEffect(() => {
        fetch();
    }, []);


    return (
        <DataProvider.Provider value={{ api, setApi, tempValue, logged, setLogged, email, setEmail, password, setPassword }}>
            {children}
        </DataProvider.Provider>
    )
}

export default Data