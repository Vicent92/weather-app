import { Stack, TextField, IconButton } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useContext } from 'react';
import { contexto } from '../context';
import { useSubmitWeather } from '../../hooks/useSubmitWeather';

export const FormAddWeather = () => {
  const { setDataAdd } = useContext(contexto)
  const { value, handleChage, handleSubmit } = useSubmitWeather(setDataAdd)

  return (
    <Stack
      direction="row"
      sx={{
        width: '320px',
        // background: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={value}
        onChange={handleChage}
        sx={{
          width: '100%',
        }}
      />

      <IconButton
        onClick={handleSubmit}
        sx={{
          right: '40px',
        }}
      >
        <AddBoxIcon />
      </IconButton>
    </Stack>
  );
};
