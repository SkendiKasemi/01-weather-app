
export default function CityDataFromSearch({ country, name, region }) {
  return (
    <div className='text'>
      <div className='country'>{country}</div>
      <div className='location'>
        {name} : {region}
      </div>
    </div>
  );
}

// DONE
