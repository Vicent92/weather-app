import { useState } from 'react'

export const useCityList = (setData, setFiveData) => {
  const [city, setCity] = useState('')

  const handleChage = (e) => {
    const { value } = e.target
    setCity(value)
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=cd50fe9b57bf2848e2b637a835ab1910&units=metric&lang=sp&q=${value}`
    fetch(url)
    .then(res => res.json())
    .then(res => setData(res))

    const url2 =
        `https://api.openweathermap.org/data/2.5/forecast?appid=cd50fe9b57bf2848e2b637a835ab1910&units=metric&lang=sp&q=${value}`
    fetch(url2)
      .then((res) => res.json())
      .then((json) => setFiveData(json.list))
  }

  return {city, handleChage}
}
