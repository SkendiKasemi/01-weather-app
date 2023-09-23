import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import CityItem from './pages/CityItem';
import Homepage from './pages/Homepage';
import { WeatherProvider } from './context/WeatherContext/WeatherContext';
import { LocationProvider } from './context/LocationContext/LocationContext';
import Day from './pages/Day';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <LocationProvider>
        <WeatherProvider>
          <div className='container'>
            <div className='search-bar-container'>
              <SearchBar />
            </div>
            <div className='weather-container'>
              <Routes>
                <Route index path='/' element={<Homepage />} />
                <Route path='/city/:city?' element={<CityItem />} />
                <Route path='/day/:index?' element={<Day />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </WeatherProvider>
      </LocationProvider>
    </BrowserRouter>
  );
}

export default App;
