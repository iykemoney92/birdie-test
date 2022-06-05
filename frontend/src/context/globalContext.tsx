import { createContext,  useReducer } from "react";
import AppReducer from "./appReducer";

const AppData = {
    user: 'Bob'
}

export const GlobalContext = createContext(AppData);

export const GlobalProvider = (params: any) => {

    const [state, dispatch] = useReducer(AppReducer, AppData);

    function setUser(action: any) {
        return dispatch({
            type: 'SET_USER',
            payload: action
        })
    }

    return (<GlobalContext.Provider value={{
        ...state, setUser
    }}>
        {params.children}
    </GlobalContext.Provider>);
}