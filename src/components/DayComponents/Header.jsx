import { useWeather } from '../../context/WeatherContext/WeatherContext';
import { formatDate } from '../../data/formatDate';
import { todayDate } from '../../data/todayDate';

export default function Header({ date, icon, text }) {
  const { city } = useWeather();
  const today = todayDate
  return (
    <div className='header'>
      <h1>{city}</h1>
      <h3>{date === today ? 'Today' : formatDate(date)}</h3>
      <div className='details'>
        <img src={icon} />
        <span>{text}</span>
      </div>
    </div>
  );
}
