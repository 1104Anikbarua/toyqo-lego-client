import React, { createContext, useState } from 'react';

export const LegoContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(null);




    return (
        <LegoContext.Provider>
            {
                children
            }
        </LegoContext.Provider>
    );
};

export default AuthProvider;