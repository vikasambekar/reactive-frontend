import {createContext, useState} from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user] = useState({
        name: "VIKAS AMBEKAR",
        email: "admin@next.com"
    });

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;