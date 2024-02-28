import React, { createContext, useContext, useState } from "react";
/*save*/
const ListContext = createContext();

export const useListContext = () => useContext(ListContext);

export const ListProvider = ({ children }) => {
  const [items, setItems] = useState(["Enter your first item..."]);

  return (
    <ListContext.Provider value={{ items, setItems }}>
      {children}
    </ListContext.Provider>
  );
};
