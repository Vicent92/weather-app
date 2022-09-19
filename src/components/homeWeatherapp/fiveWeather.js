import { Stack } from '@mui/material';

export const FiveWeather = ({ children }) => {
  return (
    <Stack
      direction="row"
      sx={{
        width: '90%',
        height: '70px',
        marginTop: '30px',
        // background: 'red',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      {children}
    </Stack>
  );
};
