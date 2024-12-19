import { createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ExchangeContextType {
  exchangess: string;
  loading: boolean;
  changeExchange: (newExchange: string) => void;
}

const initialState: ExchangeContextType = {
  exchangess: "",
  loading: false,
  changeExchange: () => { }, // Initialize with an empty function
};

const ExchangeContext = createContext(initialState);

const exchangeActions = {
  CHANGE_EXCHANGE: "CHANGE/EXCHANGE",
};

interface Action {
  type: string;
  payload?: any;
}

function reducer(state: ExchangeContextType, action: Action) {
  switch (action.type) {
    case exchangeActions.CHANGE_EXCHANGE:
      return { ...state, exchangess: action.payload, loading: false };
    default:
      throw new Error("Unknown action type");
  }
}

function ExchangeProvider({ children }: any) {
  const [{ exchangess, loading }, dispatch] = useReducer(reducer, initialState);
  const [_exchangeOne, setExchangeOne] = useLocalStorage<string>("exchange", "")

  const changeExchange = (newExchange: string) => {
    dispatch({ type: exchangeActions.CHANGE_EXCHANGE, payload: newExchange });
    setExchangeOne(newExchange)
  };

  return (
    <ExchangeContext.Provider value={{ exchangess, changeExchange, loading }}>
      {children}
    </ExchangeContext.Provider>
  );
}

function useExchange() {
  const context = useContext(ExchangeContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { ExchangeProvider, useExchange };