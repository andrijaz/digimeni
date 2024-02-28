import React, { createContext, useState, useEffect, useContext } from 'react';

interface GlobalContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}
export const localStorageName = {
    name: "digimenu-restaraunt-slug",
    publicTheme: "digimenu-restaraunt-public-theme"
}
export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC = ({ children }: any) => {
  const [name, setName] = useState(() => {
    return localStorage.getItem(localStorageName.name) || '';
  });

  useEffect(() => {
    localStorage.setItem(localStorageName.name, name);
  }, [name]);

  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  );
};
