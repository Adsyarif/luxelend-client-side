import { createContext, useState } from "react";

const defaultValue = {
  user: undefined,
  setUser: undefined,
};

const initialValue = {
  gender: undefined,
  category: undefined,
};

export const AppContext = createContext(defaultValue);

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialValue);

  const value = { user, setUser };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
