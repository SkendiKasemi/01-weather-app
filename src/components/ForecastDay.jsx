import { formatDate } from '../data/formatDate';
import { todayDate } from '../data/todayDate';

export default function ForecastDay({ data }) {
  const today = todayDate;
  const {
    date,
    day: {
      maxtemp_c,
      mintemp_c,
      condition: { icon, text },
    },
  } = data;
  return (
    <div className='forecast-day'>
      <div className='date'>{date === today ? 'Today' : formatDate(date)}</div>
      <div className='image'>
        <img src={icon} alt={text} />
        <div>{text}</div>
      </div>
      <div className='details'>
        <div className='temp'>
          {mintemp_c}°C / {maxtemp_c}°C
        </div>
      </div>
    </div>
  );
}
// DONE
