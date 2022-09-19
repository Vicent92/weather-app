import { useState, createContext } from 'react';
import { useFetching } from '../../hooks/useFetching';

const contexto = createContext();

const ProviderContext = ({ children }) => {
  const [dataAdd, setDataAdd] = useState([]);
  const { data, isLoading, setData, fiveData, setFiveData, isLoading2 } = useFetching()

  return <contexto.Provider
  value={{
    data,
    isLoading,
    setData,
    fiveData,
    setFiveData,
    isLoading2,
    dataAdd,
    setDataAdd
  }}
  >
    {children}
    </contexto.Provider>;
};

export { contexto, ProviderContext };
