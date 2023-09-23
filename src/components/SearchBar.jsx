import { useLocation } from '../context/LocationContext/LocationContext';
import CitiesListFromSearch from './CitiesListFromSearch';

export default function SearchBar() {
  const { value, setValue } = useLocation();
  return (
    <div className='inputBox'>
      <input
        type='text'
        placeholder='Location...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      
      {value && <CitiesListFromSearch />}

    </div>
  );
}
// DONE