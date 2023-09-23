// import { createContext, useContext, useEffect, useReducer } from 'react';

// const WeatherContext = createContext();

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '02e904bdc8msh220b99d392816aep1d137ejsnd8bd6a2d4a82',
//     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
//   },
// };

// const initialState = {
//   location: '',
//   weatherData: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'addingWeatherData':
//       return {
//         ...state,
//         weatherData: action.payload,
//       };
//     case 'gettingLocation':
//       return {
//         ...state,
//         location: action.payload,
//       };

//     default:
//       throw new Error('Action Unknown!!!');
//   }
// };

// export const WeatherProvider = ({ children }) => {
//   const [{ location, weatherData }, dispatch] = useReducer(
//     reducer,
//     initialState
//   );

//   // const [location, setLocation] = useState('');
//   // const [weatherData, setWeatherData] = useState([]);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       if (location.length < 3) return;
//       try {
//         const response = await fetch(
//           `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=7`,
//           options
//         );
//         const data = await response.json();

//         dispatch({ type: 'addingWeatherData', payload: data });
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchWeather();
//   }, [location]);

//   return (
//     <WeatherContext.Provider
//       value={{
//         location,
//         weatherData,
//         dispatch,
//       }}
//     >
//       {children}
//     </WeatherContext.Provider>
//   );
// };

// export const useWeather = () => {
//   const context = useContext(WeatherContext);
//   if (context === undefined) return 'Context used not in the right place!!!';
//   return context;
// };
console.log('Wrong Page');