import { Stack, Typography, Paper } from '@mui/material';
import { FiveWeather } from './fiveWeather';
import { ItemsFiveWeather } from './itemsFiveWeather';
import { useContext } from 'react'
import { contexto } from './context';
import { SelectFormWeather } from './selectFormWeather';

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
          backgroundImage:
            'linear-gradient(to bottom, #061427, #142449, #32326b, #593d8a, #8844a4)',
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
                color: 'white',
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
                color: 'white',
              }}
            >
              {data.main.temp.toFixed(1)}°C
            </Typography>

            {
              data.weather.map(el => {
                const icon = el.icon+"png"
                return <Stack>
                          <img src={icon}/>
                       </Stack>
              })
            }
          </Stack>
        </Stack>
      </Paper>

      <FiveWeather>
        {isLoading2 ? <ItemsFiveWeather/> : ''}
      </FiveWeather>
    </>
  );
};
