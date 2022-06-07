import { Button, TextField, Stack, Typography, Box } from '@mui/material';

const Registration = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#222c42' }}>
      <Stack spacing={3} sx={{ padding: '15px', width: 300, backgroundColor: '#363636' }}>
        <Typography sx={{ color: '#fff', textAlign: 'center', fontSize: '20px' }}>Registration</Typography>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />

        <Button variant="contained">Registration</Button>
      </Stack>
    </Box >
  )
}

export default Registration