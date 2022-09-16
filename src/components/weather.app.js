import { Stack, Typography, Button } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export const WeatherApp = ({ data }) => {


  return (
    <Stack
      direction='column'
      sx={{
        width: '300px',
        height: '400px',
        // backgroundColor: 'red',
        marginTop: '60px'
      }}
    >

      <Stack
        sx={{
          width: '100%',
          height: '50px',
          // backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant='h5'>
          {data.name}
        </Typography>

      </Stack>

      <Stack
        sx={{
          width: '100%',
          height: '250px',
          // backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant='h1'>
          {data.main.temp}
        </Typography>

        <Stack>
          Icono
        </Stack>

      </Stack>




    </Stack>
  )
}
