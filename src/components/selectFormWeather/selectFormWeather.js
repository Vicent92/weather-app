import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { useState, useContext } from 'react'
import { contexto } from '../context'
import { countryList } from './countryList'

export const SelectFormWeather = () => {
  const [city, setCity] = useState('')
  const { setData, setFiveData } = useContext(contexto)

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

  return (
    <FormControl
      variant='standard'
      sx={{
        width: '200px'
      }}
    >

      <InputLabel
        id="demo-simple-select-standard-label">
        Ciudad
      </InputLabel>

      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        label='Pais'
        value={city}
        onChange={handleChage}
      >

        <MenuItem>Location</MenuItem>
        {
          countryList.map(ct => {
            return <MenuItem value={ct.city}>{ct.city}</MenuItem>
          })
        }


      </Select>

    </FormControl>
  )
}
