import { useWeather } from '../context/WeatherContext/WeatherContext';
import Forecast from '../components/Forecast';

export default function CityItem() {
  const { icon, text, temp_c, feelslike_c, city } = useWeather();

  return (
    <div className='city-item'>
      <div className='header'>
        <div className='details'>
          <h1 className='city-title'>{city}</h1>
          <span className='temperature'>Temperature: {temp_c} °C</span>
          <span className='feels-like'>Feels Like: {feelslike_c} °C</span>
        </div>
        <div className='icon'>
          <img src={icon} alt={text} />
          <span>{text}</span>
        </div>
      </div>

      <Forecast />
    </div>
  );
}

// Done
