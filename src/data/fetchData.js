import { options } from './options';

export const fetchData = async (lat, lon, setData) => {
  if (!lat && !lon) {
    return 'Loading';
  }
  try {
    const res = await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${lat}%2C${lon}&days=7`,
      options
    );
    const data = await res.json();
    setData(data);
  } catch (error) {
    console.error(error);
  }
};
