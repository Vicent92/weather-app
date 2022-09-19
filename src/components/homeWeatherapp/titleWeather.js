import { Stack, Typography, Button, IconButton } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRender } from '../../hooks/useRender';
import { useIconToggle } from '../../hooks/useIconToggle';

export const TitleWeather = () => {
  const { render, handleTrue, handleFalse } = useRender(false);
  const { linkAddWtr, linkWtrApp } = useIconToggle(handleTrue, handleFalse);

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
      {!render ? (
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
      ) : (
        <IconButton onClick={linkWtrApp}>
          <ArrowBackIcon />
        </IconButton>
      )}

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
            color: '#272343',
          }}
        >
          WeatherApp
        </Typography>
      </Stack>

      <WbSunnyIcon />
    </Stack>
  );
};
