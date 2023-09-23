import CityFromSearch from './CityFromSearch';
import { useLocation } from '../context/LocationContext/LocationContext';

export default function CitiesListFromSearch() {
  const { results } = useLocation();
  return (
    <>
      {results.length > 0 && (
        <ul className='CitiesList'>
          {results?.map((result) => (
            <CityFromSearch key={result.id} result={result} />
          ))}
        </ul>
      )}
    </>
  );
}
// DONE