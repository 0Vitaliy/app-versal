import { Stack, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CREATE_RESUME } from '../../constants/routes';

const UserResumes = () => {
  const navigate = useNavigate()

  const createResume = () => {
    navigate(CREATE_RESUME)
  }

  return (
    <Box sx={{ background: '#222c42', height: '100vh' }}>
      <Stack spacing={2} direction="row" sx={{
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '50px'
      }}>
        <Button variant="outlined" onClick={createResume}>Create resume</Button>
      </Stack>
    </Box >
  );
}

export default UserResumes;