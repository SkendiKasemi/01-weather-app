
import DisplayingHourlyTheWeather from '../DisplayingHourlyTheWeather'

export default function HorizontalScrollbar({dayAsked, date}) {
  return (
    <div className='horizontal-scrollbar' role='ul'>
      {dayAsked.hour &&
        dayAsked.hour.map((item) => (
          <li key={item.time_epoch} role='list' className='box-container'>
            <DisplayingHourlyTheWeather item={item} date={date} />
          </li>
        ))}
    </div>
  );
}
