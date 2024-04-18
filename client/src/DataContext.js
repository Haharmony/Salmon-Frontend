import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [userId, setUserId] = useState();

  return (
    <DataContext.Provider value={{ data, setData, userId, setUserId }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
