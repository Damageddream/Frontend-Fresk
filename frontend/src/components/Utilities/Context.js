import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { },
});


export const AuthContexProvider = (props) => {

    const initalToken = localStorage.getItem('access_token')
    const [token, setToken] = useState(initalToken)

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
    };

    const logoutHandler = () => {
        setToken(null);
    };

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };



    return (<AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>)

};

export default AuthContext;