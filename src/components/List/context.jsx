import React, { createContext, useContext, useReducer } from "react";
import { ADD_TEXT, DELETE_TEXT } from "./actinos";

const TextListContext = createContext();

function TextListReducer(state, action) {
  switch (action.type) {
    case ADD_TEXT: {
      return [...state, { name: action.payload.name, id: action.payload.id }];
    }
    case DELETE_TEXT: {
      return state.filter((text) => text.id !== action.payload.id);
    }
    default:
      return null;
  }
}
const initialState = [];

function TextListProvider({ children }) {
  const [state, dispatch] = useReducer(TextListReducer, initialState);
  const value = { state, dispatch };

  return (
    <TextListContext.Provider value={value}>
      {children}
    </TextListContext.Provider>
  );
}

function useTextListProviderContext() {
  const context = useContext(TextListContext);
  return context;
}

export { TextListProvider, useTextListProviderContext };
