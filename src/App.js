import './App.css';
import { WeatherApp } from './components/weather.app';
import { useContext } from 'react';
import { TitleWeather } from './components/titleWeather';
import { Routes, Route } from 'react-router-dom';
import { AddWeather } from './components/addWeather/addWeather';
import { contexto } from './components/context';

function App() {
  const { isLoading } = useContext(contexto)

  return (
    <div className="App">

      <TitleWeather />

      <Routes>
        <Route
          path="/"
          element={
            isLoading ? (
              <WeatherApp
              />
            ) : (
              ''
            )
          }
        />

        <Route
          path="addweather"
          element={
            <AddWeather
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
