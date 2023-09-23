import { Link } from 'react-router-dom';
import { useWeather } from '../context/WeatherContext/WeatherContext';
import ForecastDay from './ForecastDay';

export default function Forecast() {
  const { forecast, dayLat, dayLon } = useWeather();

  return (
    <div className='forecast'>
      {forecast?.map((data, index) => (
        <Link
          key={data.date_epoch}
          to={`/day/${index}?lat=${dayLat}&lon=${dayLon}`}
          className='link'
        >
          <ForecastDay data={data} />
        </Link>
      ))}
    </div>
  );
}
// DONE