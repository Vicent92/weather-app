import { Stack, Typography } from '@mui/material';
import { useContext } from 'react'
import { contexto } from './context';

export const ItemsFiveWeather = () => {
  const { fiveData } = useContext(contexto)

  return (
    <>
      <Stack>
        <Typography>
          <div>{fiveData[7].main.temp.toFixed(1)}</div>
        </Typography>

        <div>Icono</div>
      </Stack>

      <Stack>
        <Typography>
          <div>{fiveData[15].main.temp.toFixed(1)}</div>
        </Typography>

        <div>Icono</div>
      </Stack>

      <Stack>
        <Typography>
          <div>{fiveData[23].main.temp.toFixed(1)}</div>
        </Typography>

        <div>Icono</div>
      </Stack>

      <Stack>
        <Typography>
          <div>{fiveData[31].main.temp.toFixed(1)}</div>
        </Typography>

        <div>Icono</div>
      </Stack>

      <Stack>
        <Typography>
          <div>{fiveData[39].main.temp.toFixed(1)}</div>
        </Typography>

        <div>Icono</div>
      </Stack>
    </>
  );
};
