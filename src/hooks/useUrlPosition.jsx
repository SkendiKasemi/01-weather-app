import { useSearchParams } from 'react-router-dom';

export const useUrlPosition = () => {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  return [lat, lon];
};
