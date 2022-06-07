import { CircularProgress, Box } from '@mui/material';

const style = {
  display: 'flex',
  position: 'fixed',
  height: '100vh',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000000
}

const Loader = () => {
  return (
    <Box sx={style}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;