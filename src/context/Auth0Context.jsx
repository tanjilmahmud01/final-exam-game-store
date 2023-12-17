import { createContext, useState } from "react";

export const Auth0Context = createContext();

export const Auth0DataProvider = ({ children }) => {
  const [loginUser, SetLoginUser] = useState(null);

  return (
    <Auth0Context.Provider value={{ loginUser, SetLoginUser }}>
      {children}
    </Auth0Context.Provider>
  );
};
