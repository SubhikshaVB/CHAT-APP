import { useState } from "react";
import { createContext, useContext } from "react";

export const AuthContext = createContext();
export const useAuthContext = () => {
    return useContext(AuthContext);
}
export const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)  //JSON parse will take the string value obtained from "localStorage.getItem("chat-user") " and convert it into object

    return <AuthContext.Provider value = {{authUser,setAuthUser}}>
    {children}
    </AuthContext.Provider>
}