// import context, useffect, and usereducer
import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
  // before login will be false
  // no user yet
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};
// export initial state
export const Context = createContext(INITIAL_STATE);
// the children components will be passed in
export const ContextProvider = ({ children }) => {
  // use reducer to update intiial state
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
