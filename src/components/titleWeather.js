import { Stack, Typography, Button } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export const TitleWeather = () => {
  return (
      <Stack
          direction='row'
          sx={{
            width: '90%',
            height: '70px',
            // backgroundColor: 'yellow',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '30px'
          }}
        >
          <Button
            variant='outlined'
            color='primary'
            sx={{
              height: '30px',
              width: '1px',
              borderRadius: '50px'
            }}
          >
              Add
          </Button>

          <Stack
            sx={{
              width: '120px',
              height: '30px',
              // backgroundColor: 'red'
            }}
          >
            <Typography variant='h6'>
              WeatherApp
            </Typography>
          </Stack>

          <WbSunnyIcon/>
      </Stack>
  )
}
