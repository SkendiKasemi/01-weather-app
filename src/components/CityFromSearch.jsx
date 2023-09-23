import { Link } from 'react-router-dom';
import { useLocation } from '../context/LocationContext/LocationContext';
import CityDataFromSearch from './CityDataFromSearch';

export default function CityFromSearch({ result }) {
  const { name, country, region, lat, lon } = result;
  const { setValueEmpty } = useLocation();

  return (
    <li className='City'>
      <Link
        to={`city/${name}?lat=${lat}&lon=${lon}`}
        onClick={setValueEmpty}
        className='link'
      >
        <CityDataFromSearch name={name} country={country} region={region} />
      </Link>
    </li>
  );
}
// DONE