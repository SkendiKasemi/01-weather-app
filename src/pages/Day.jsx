import { useParams } from 'react-router-dom';
import { useWeather } from '../context/WeatherContext/WeatherContext';
import './Day.css';
import Header from '../components/DayComponents/Header';
import WeatherDetails from '../components/DayComponents/WeatherDetails';
import HorizontalScrollbar from '../components/DayComponents/HorizontalScrollbar';

export default function Day() {
  const { index } = useParams();
  const { forecast } = useWeather();

  const dayAsked = forecast[index];

  const {
    astro: { sunrise, sunset },
    date,
    day: {
      avgtemp_c,
      condition: { text, icon },
      maxtemp_c,
      mintemp_c,
      daily_chance_of_rain,
    },
  } = dayAsked;

  return (
    <div className='day-container'>
      <Header date={date} text={text} icon={icon} />

      <WeatherDetails
        sunrise={sunrise}
        sunset={sunset}
        avgtemp_c={avgtemp_c}
        maxtemp_c={maxtemp_c}
        mintemp_c={mintemp_c}
        daily_chance_of_rain={daily_chance_of_rain}
      />
      
      <HorizontalScrollbar dayAsked={dayAsked} date={date} />
    </div>
  );
}
