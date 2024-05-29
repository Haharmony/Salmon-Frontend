import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [userId, setUserId] = useState();
  const [dataClase, setClaseData] = useState();
  const [carpetaId, setCarpetaId] = useState();

  return (
    <DataContext.Provider value={{ data, setData, userId, setUserId, dataClase, setClaseData, carpetaId, setCarpetaId }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);