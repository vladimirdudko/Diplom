import React, { useState } from "react";
export interface TokenArgs {
  refresh: string;
  access: string;
}
interface IAppContext {
  userToken: string;
  saveUserToken: (tokens: TokenArgs) => void;
  clearToken: () => void;
}

const initialContext = {
  userToken: "",
  saveUserToken: () => {},
  clearToken: () => {},
};
const AppContext = React.createContext<IAppContext>(initialContext);
const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userToken, setUserToken] = useState<string>(
    localStorage.getItem("access") || ""
  );

  const saveUserToken = (tokens: TokenArgs) => {
    setUserToken(tokens.access);
    localStorage.setItem("access", tokens.access);
    localStorage.setItem("refresh", tokens.refresh);
  };
  const clearToken = () => {
    setUserToken("");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  };

  return (
    <AppContext.Provider
      value={{
        userToken,
        saveUserToken,
        clearToken,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  return context;
};

export default AppContextProvider;
