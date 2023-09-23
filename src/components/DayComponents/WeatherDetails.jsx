export default function WeatherDetails({
  sunrise,
  sunset,
  avgtemp_c,
  maxtemp_c,
  mintemp_c,
  daily_chance_of_rain,
}) {
  return (
    <div className='weather-details'>
      <div className='temperature'>
        <h3>Max. Temperature {maxtemp_c}°C</h3>
        <h3>Min. Temperature {mintemp_c}°C</h3>
        <h3>Avg. {avgtemp_c}°C</h3>
        <h4>{daily_chance_of_rain}% chance of rain</h4>
      </div>
      <div className='sunrise-sunset'>
        <p>🌅 Sunrise: {sunrise}</p>
        <p>🌆 Sunset: {sunset}</p>
      </div>
    </div>
  );
}
