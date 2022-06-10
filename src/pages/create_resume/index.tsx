import { Box, Stack, TextField, Button, Typography } from '@mui/material';


const CreateResume = () => {
  return (
    <Box sx={{ background: '#222c42', height: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <Box>
        <Box>
          <Typography> Personal data</Typography>
          <Stack spacing={3} sx={{ width: 400 }}>
            <TextField label="FirstName" variant="outlined" />
            <TextField label="LastName" variant="outlined" />


            <Button variant="contained">Save</Button>
          </Stack>
        </Box>
        <Box>
          <Typography> Contact Information</Typography>
          <Stack spacing={3} sx={{ width: 400 }}>
            <TextField label="Phone" variant="outlined" />
            <TextField label="Email" variant="outlined" />

            <Button variant="contained">Save</Button>
          </Stack>
        </Box>
        <Box>
          <Typography>Skills and achievements</Typography>
          <Stack spacing={3} sx={{ width: 400 }}>
            <TextField
              id="standard-multiline-static"
              label="Multiline"
              multiline
              rows={3}
              variant="outlined"
            />

            <Button variant="contained">Save</Button>
          </Stack>
        </Box>
        <Box>
          <Typography>Experience</Typography>

          <Stack spacing={3} sx={{ width: 400 }}>
            <TextField label="Company" variant="outlined" />
            <TextField label="Position" variant="outlined" />
            <TextField label="Період роботи" variant="outlined" />

            <Button variant="contained">Save</Button>
          </Stack>

        </Box>


        <Box>
          <Typography>Language skills</Typography>

          <Stack spacing={3} sx={{ width: 400 }}>
            <TextField label="Language" variant="outlined" />
            <TextField label="Proficiency level" variant="outlined" />

            <Button variant="contained">Save</Button>
          </Stack>

        </Box>
        <Box>
          <Typography>Education</Typography>

          <Stack spacing={3} sx={{ width: 400 }}>
            <TextField label="Educational level" variant="outlined" />
            <TextField label="The name of the university" variant="outlined" />
            <TextField label="City" variant="outlined" />
            <TextField label="Faculty, Specialty" variant="outlined" />
            <TextField label="Year of graduation" variant="outlined" />

            <Button variant="contained">Save</Button>
          </Stack>

        </Box>

      </Box>
    </Box >
  );
}

export default CreateResume;