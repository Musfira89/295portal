"use client"
import { useContext, createContext, useState, useReducer } from 'react';
export const CampaignContext = createContext(null);

const initialState = [];

const reducer = (state, action) => {

    switch (action.type) {

        case "GET_CAMPAIGN":
            return action.payload;
        case 'ADD_CAMPAIGN':
            return [...state, action.payload];
        default:
            return state;
    }

}
const ContextWrapper = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CampaignContext.Provider value={{ state, dispatch }}>
            {children}
        </CampaignContext.Provider>
    )
}

export default ContextWrapper