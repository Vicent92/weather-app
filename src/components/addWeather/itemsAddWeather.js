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
        width: '30%',
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
              backgroundColor: 'blue',
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
              <Typography>{el.name}</Typography>

              <Typography>{el.main.temp.toFixed(1)} °C</Typography>
            </Stack>
          </Paper>
        );
      })}
    </Stack>
  );
};
