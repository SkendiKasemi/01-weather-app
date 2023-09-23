import { createContext, useContext, useEffect, useState } from 'react';
import { useUrlPosition } from '../../hooks/useUrlPosition';
import { fetchData } from '../../data/fetchData';
import { getUserLocation } from '../../data/getUserLocation';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [lat, lon] = useUrlPosition();
  const [initialLat, setInitialLat] = useState('');
  const [initialLon, setInitialLon] = useState('');
  
  useEffect(() => {
    const homepageFetching = async () => {
      await getUserLocation()
        .then(async (location) => {
          const { lat, lon } = location;
          setInitialLat(lat);
          setInitialLon(lon);
        })
        .catch((error) => {
          console.error('Error getting user location:', error.message);
        });
    };
    homepageFetching();
  }, []);

  useEffect(() => {
    if (!lat && !lon) {
      fetchData(initialLat, initialLon, setData);
    } else {
      fetchData(lat, lon, setData);
    }
  }, [lat, lon, initialLat, initialLon]);
  // SETTING THE DATA FOR THE CityItem COMPONENT

  if (!data || !data.forecast || !data.current) {
    return 'Loading...';
  }

  const forecast = data?.forecast?.forecastday;
  const current = data?.current;

  const icon = current?.condition?.icon;
  const text = current?.condition?.text;
  const temp_c = current?.temp_c;
  const feelslike_c = current?.feelslike_c;
  const location = data.location;
  const city = location?.name;

  const dayLat = data?.location?.lat;
  const dayLon = data?.location?.lon;

  // SETTING THE DATA FOR THE Day COMPONENT

  return (
    <WeatherContext.Provider
      value={{
        forecast,
        icon,
        text,
        temp_c,
        feelslike_c,
        location,
        dayLat,
        dayLon,
        city
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) return 'Context used not in the right place!!!';
  return context;
};
