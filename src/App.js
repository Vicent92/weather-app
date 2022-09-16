import './App.css';
import { WeatherApp } from './components/weather.app';
import { useState, useEffect } from 'react'
import { TitleWeather } from './components/titleWeather';

function App() {
const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?appid=3968d4053f61c5c59e7a254eb8c2680b&units=metric&lang=sp&q=santiago'
    fetch(url)
    .then(res => res.json())
    .then(json => {
      setData(json)
      setIsLoading(true)
    })
  }, [])
  console.log(data)

  return (
    <div className="App">

        <TitleWeather/>

        {isLoading ? <WeatherApp data={data}/> : ''}

    </div>
  );
}

export default App;
