import React, { useReducer, createContext } from "react";

export const searchContext = createContext();

function SearchContextProvider({ children }) {
  const rootReducer = (state, action) => {
    switch (action.type) {
      case "KEYWORD_ADDED":
        return action.keyword;
      default:
        return state;
    }
  };
  const [keyword, dispatch] = useReducer(rootReducer, "");
  return (
    <searchContext.Provider value={{ dispatch, keyword }}>
      {children}
    </searchContext.Provider>
  );
}

export default SearchContextProvider;
