import { useContext } from 'react';
import { Button, TextField, Stack, Typography, Box } from '@mui/material';
import { useFormik } from 'formik';
import { AuthCTX } from 'components/auth_store/store';

const Registration = () => {
  const { signUpAction } = useContext(AuthCTX)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    onSubmit: values => {
      signUpAction({ firstName: 'firstName', lastName: "lastName", email: "email@email.com", password: 'password' })
    },
  });
  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#222c42' }}>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3} sx={{ padding: '15px', width: 300, backgroundColor: '#363636' }}>
          <Typography sx={{ color: '#fff', textAlign: 'center', fontSize: '20px' }}>Registration</Typography>
          <TextField id="outlined-basic" label="First Name" variant="outlined" />
          <TextField id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />

          <Button type="submit" variant="contained">Registration</Button>
        </Stack>
      </form>
    </Box >
  )
}

export default Registration