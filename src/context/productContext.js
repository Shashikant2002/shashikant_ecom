// Create A Context
// Provider
// Consumer => use Context Hook

import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    produc: [],
    featureProducts: []
};


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProduct = async (URL) => {
        dispatch({type: "SET_LOADING"})
        try {
            const res = await axios.get(URL)
            const product = await res.data;

            dispatch({
                type: "SET_API_DATA",
                payload: product,
            })
        }
        catch (err) {
            dispatch({
                type: "API_ERROR",
                payload: err,
            })
        }
    }

    useEffect(() => {
        getProduct(API);
    }, []);


    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}

// Custom Hook
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext }