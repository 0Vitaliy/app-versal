import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Button, TextField, Stack, Typography, Box } from '@mui/material';
import { AuthCTX } from '../../components/auth_store/store';
import { REGISTRATION } from '../../constants/routes';

const Login = observer(() => {
  const { loginAction } = useContext(AuthCTX)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      loginAction({ username: 'Name10', password: 'password' })
    },
  });

  return (
    <Box>
      <Typography sx={{ textAlign: 'center', fontSize: 20, padding: '15px 0 0' }}>LOGIN</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2} sx={{ padding: '10px', minWidth: 300 }}>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />

          <Button type="submit" variant="contained">Login</Button>

          <Button onClick={() => navigate(REGISTRATION)}>Registration</Button>
        </Stack>
      </form>
    </Box>
  );
})

export default Login

