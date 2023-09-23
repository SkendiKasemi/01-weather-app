import { createContext, useContext, useEffect, useState } from 'react';
import { options } from '../../data/options';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (value.length < 3) {
        setResults([]);
        return;
      }
      try {
        const response = await fetch(
          `https://weatherapi-com.p.rapidapi.com/search.json?q=${value}`,
          options
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [value]);

  
  const setValueEmpty = () => {
    setValue('');
  };

  return (
    <LocationContext.Provider
      value={{
        value,
        results,
        setValue,
        setValueEmpty,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined)
    throw new Error('LocationContext used out of LocationProvider! ');
  return context;
};
