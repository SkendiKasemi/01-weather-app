import { formatDateAndTime } from '../data/formatDateAndTime';
import { currentTime } from '../data/hourDisplay';
import { todayDate } from '../data/todayDate';
import './DisplayingHourlyTheWeather.css';

export default function DisplayingHourlyTheWeather({ item, date }) {
  const today = todayDate;
  const {
    time: dateAndTime,
    feelslike_c,
    temp_c,
    condition: { icon, text },
  } = item;

  const formattedDateAndTime = formatDateAndTime(dateAndTime);
  const { time } = formattedDateAndTime;

  return (
    <div className='box'>
      <div className='time'>
        <h4>
          {time === '12:00 AM'
            ? '00:00 AM'
            : time === currentTime && date === today
            ? 'Now'
            : time}
        </h4>
      </div>
      <div className='image'>
        <img src={icon} />
        <span>{text}</span>
      </div>
      <div className='temp'>
        <h4>Temp: {temp_c.toFixed()}°C</h4>
        <h4>Feels Like: {feelslike_c}°C</h4>
      </div>
    </div>
  );
}

// DONE
