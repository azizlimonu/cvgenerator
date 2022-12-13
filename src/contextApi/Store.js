import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

import CVEmpty from "../utils/CVEmpty";
import CVDummy from "../utils/CVDummy";

export const CVContext = createContext();
export const CVDispatchContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, CVDummy)

  return (
    <CVContext.Provider value={state}>
      <CVDispatchContext.Provider value={dispatch}>
        {children}
      </CVDispatchContext.Provider>
    </CVContext.Provider>
  )
};

export function useCV() {
  return useContext(CVContext);
}

export function useCVDispatch() {
  return useContext(CVDispatchContext);
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_GENERAL_INFO':
      return {
        ...state,
        generalInfo: {
          ...state.generalInfo,
          [action.name]: action.value,
        }
      }

    case 'ADD_EDUCATION':
      return {
        ...state,
        education: [
          {
            id: uuidv4(),
            universityName: '',
            city: '',
            degree: '',
            subject: '',
            from: '',
            to: '',
          },
          ...state.education
        ]
      }

    case 'DELETE_EDUCATION':
      return {

      }

    case 'CHANGE_EDUCATION':
      return {

      }


    default:
      return state;
  }
};