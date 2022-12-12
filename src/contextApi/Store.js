import { createContext, useContext, useReducer } from "react";

import CVEmpty from "../utils/CVEmpty";
import CVDummy from "../utils/CVDummy";

const CVContext = createContext();
const CVDispatchContext = createContext();

const initialState = CVDummy;

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CVContext.Provider value={state}>
      <CVDispatchContext.Provider value={dispatch}>
        {children}
      </CVDispatchContext.Provider>
    </CVContext.Provider>
  )
};

export const useCV = () => {
  return useContext(CVContext);
};

export const useCVDispatch = () => {
  return useContext(CVDispatchContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case '':


    default:
      return state;
  }
};