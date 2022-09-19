import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { useState, useEffect, useContext } from 'react'
import { contexto } from './context'

export const SelectFormWeather = () => {
  const [pais, setPais] = useState('')
  const { setData, data } = useContext(contexto)

  const handleChage = (e) => {
    const { value } = e.target
    setPais(value)
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=3968d4053f61c5c59e7a254eb8c2680b&units=metric&lang=sp&q=${value}`
    fetch(url)
    .then(res => res.json())
    .then(res => setData(res))
    console.log(data)
  }

  // const handleClick = () => {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?appid=3968d4053f61c5c59e7a254eb8c2680b&units=metric&lang=sp&q=${value}`
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(res => setData(res))
  // }

  return (
    <FormControl
      variant='standard'
      sx={{
        width: '200px'
      }}
    >

      <InputLabel
        id="demo-simple-select-standard-label">
        Pais
      </InputLabel>

      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        label='Pais'
        value={pais}
        onChange={handleChage}
      >

        <MenuItem>Location</MenuItem>
        <MenuItem value='buenos aires'>Buenos Aires</MenuItem>
        <MenuItem value='caracas'>Caracas</MenuItem>
        <MenuItem value='cordoba'>Cordoba</MenuItem>


      </Select>

    </FormControl>
  )
}
