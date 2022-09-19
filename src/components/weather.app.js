import { Stack, Typography, Paper } from '@mui/material';
import { FiveWeather } from './fiveWeather';
import { ItemsFiveWeather } from './itemsFiveWeather';
import { useContext } from 'react'
import { contexto } from './context';
import { SelectFormWeather } from './selectFormWeather/selectFormWeather';

export const WeatherApp = () => {
  const { data, isLoading2 } = useContext(contexto)
  // const icon = ``

  return (
    <>
    <SelectFormWeather/>
      <Paper
        sx={{
          width: '300px',
          height: '350px',
          backgroundColor: '#bae8e8',
          marginTop: '60px',
          borderRadius: '30px',
        }}
      >
        <Stack
          direction="column"
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          <Stack
            sx={{
              width: '100%',
              height: '50px',
              // backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#272343',
              }}
            >
              {data.name}
            </Typography>
          </Stack>

          <Stack
            sx={{
              width: '100%',
              height: '250px',
              // backgroundColor: 'blue',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: '#272343',
              }}
            >
              {data.main.temp.toFixed(1)}°C
            </Typography>
          </Stack>
        </Stack>
      </Paper>

      <FiveWeather>
        {isLoading2 ? <ItemsFiveWeather/> : ''}
      </FiveWeather>
    </>
  );
};
