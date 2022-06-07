import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, TextField, Stack, Typography, Box } from '@mui/material';
import { AuthCTX } from '../../components/auth_store/store';

const Login = observer(() => {
  const { loginAction } = useContext(AuthCTX)

  return (
    <Box>
      <Typography sx={{ textAlign: 'center', fontSize: 20, padding: '15px 0 0' }}>LOGIN</Typography>
      <Stack spacing={2} sx={{ padding: '10px', minWidth: 300 }}>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />

        <Button variant="contained" onClick={() => loginAction({ username: 'Name10', password: 'password' })}>Login</Button>
      </Stack>
    </Box>
  );
})

export default Login

