import React, { useReducer } from "react";
import useThunkReducer from "react-hook-thunk-reducer";
import { appReducer, AppState, initialState } from "./app/slice";

export interface IAppContext {
  state: AppState;
  dispatch: React.Dispatch<any>;
}

const AppContext = React.createContext<IAppContext | null>(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useThunkReducer(appReducer, initialState);
  const contextValue = React.useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return React.useContext<IAppContext | null>(AppContext);
}
