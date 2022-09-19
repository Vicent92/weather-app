import { Stack, Typography, Paper } from '@mui/material';

import { useContext } from 'react'
import { useSelectorWeather } from '../../hooks/useSelectorWeather';
import { contexto } from '../context';

export const ItemAddWeather = () => {
  const { setData, setFiveData, dataAdd } = useContext(contexto)
  const { selectWeather } = useSelectorWeather(setData, setFiveData, dataAdd)

  return (
    <Stack
      direction="column"
      sx={{
        width: '350px',
        // background: 'red',
        marginTop: '20px',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      {dataAdd.map((el) => {
        return (
          <Paper
            sx={{
              width: '70%',
              height: '50px',
              marginTop: '10px',
              backgroundColor: '#bae8e8',
              cursor: 'pointer'
            }}
            onClick={() => selectWeather(el.sys.id)}
          >
            <Stack
              direction="row"
              sx={{
                width: '100%',
                height: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Typography variant='h6' sx={{color: '#272343'}}>{el.name}</Typography>

              <Typography variant='h6' sx={{color: '#272343'}}>{el.main.temp.toFixed(1)} °C</Typography>
            </Stack>
          </Paper>
        );
      })}
    </Stack>
  );
};
