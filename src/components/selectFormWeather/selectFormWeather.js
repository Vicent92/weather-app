import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useContext } from 'react';
import { useCityList } from '../../hooks/useCityList';
import { contexto } from '../context';
import { countryList } from './countryList';

export const SelectFormWeather = () => {
  const { setData, setFiveData } = useContext(contexto);
  const { city, handleChage } = useCityList(setData, setFiveData);

  return (
    <FormControl
      variant="standard"
      sx={{
        width: '200px',
      }}
    >
      <InputLabel id="demo-simple-select-standard-label">Ciudad</InputLabel>

      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        label="Pais"
        value={city}
        onChange={handleChage}
      >
        <MenuItem>Location</MenuItem>
        {countryList.map((ct) => {
          return <MenuItem value={ct.city}>{ct.city}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};
