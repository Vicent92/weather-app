import { Stack, Typography } from '@mui/material';
import { useContext } from 'react'
import { contexto } from '../context/index';

export const ItemsFiveWeather = () => {
  const { fiveData } = useContext(contexto)

  return (
    <>
      <Stack>
        <Typography variant='h5' sx={{color: '#272343'}}>
          <div>{fiveData[7].main.temp.toFixed(1)}°C</div>
          <div>{fiveData[7].dt_txt.split(' ')[0]}</div>
        </Typography>
      </Stack>

      <Stack>
        <Typography variant='h5' sx={{color: '#272343'}}>
          <div>{fiveData[15].main.temp.toFixed(1)}°C</div>
          <div>{fiveData[15].dt_txt.split(' ')[0]}</div>
        </Typography>
      </Stack>

      <Stack>
        <Typography variant='h5' sx={{color: '#272343'}}>
          <div>{fiveData[23].main.temp.toFixed(1)}°C</div>
          <div>{fiveData[23].dt_txt.split(' ')[0]}</div>
        </Typography>
      </Stack>

      <Stack>
        <Typography variant='h5' sx={{color: '#272343'}}>
          <div>{fiveData[31].main.temp.toFixed(1)}°C</div>
          <div>{fiveData[31].dt_txt.split(' ')[0]}</div>
        </Typography>
      </Stack>

      <Stack>
        <Typography variant='h5' sx={{color: '#272343'}}>
          <div>{fiveData[39].main.temp.toFixed(1)}°C</div>
          <div>{fiveData[39].dt_txt.split(' ')[0]}</div>
        </Typography>
      </Stack>
    </>
  );
};
