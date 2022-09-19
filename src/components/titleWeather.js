import { Stack, Typography, Button } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useNavigate } from 'react-router-dom'

export const TitleWeather = () => {
  const navigate = useNavigate()

  const linkAddWtr = () => {
    navigate('addweather')
  }

  return (
    <Stack
      direction="row"
      sx={{
        width: '70%',
        height: '70px',
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '30px',
        marginRight: '30px',
      }}
    >
      <Button
        variant="outlined"
        color="primary"
        sx={{
          height: '30px',
          width: '1px',
          borderRadius: '50px',
        }}
        onClick={linkAddWtr}
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
        <Typography
          variant="h6"
          sx={{
            color: 'white',
          }}
        >
          WeatherApp
        </Typography>
      </Stack>

      <WbSunnyIcon />
    </Stack>
  );
};
