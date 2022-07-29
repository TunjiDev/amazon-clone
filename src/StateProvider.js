import React, { createContext, useContext, useReducer } from "react";

//Creating an empty data layer
export const StateContext = createContext();

//Build a provider so that we can wrap our entire app inside of this provider
//and give it access to the data layer up above
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
