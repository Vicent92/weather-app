import { useNavigate } from 'react-router-dom'

export const useSelectorWeather = (setData, setFiveData, dataAdd) => {
  const navigate = useNavigate()

  const selectWeather = async (id) => {
    const findWeather = dataAdd.find(el => el.sys.id === id)
    const url =
      `https://api.openweathermap.org/data/2.5/forecast?appid=cd50fe9b57bf2848e2b637a835ab1910&units=metric&lang=sp&q=${findWeather.name}`;
    fetch(url)
    .then(res => res.json())
    .then(json => {
      setFiveData(json.list)
      console.log(json.list)
    })
    setData(findWeather)
    navigate('/')
  }

  return { selectWeather }
}
