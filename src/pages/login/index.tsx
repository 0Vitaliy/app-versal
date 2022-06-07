import { useContext, useState, Fragment } from 'react';
import { observer } from 'mobx-react-lite';
import { Drawer, Button, TextField, Stack, Typography } from '@mui/material';
import { AuthCTX } from '../../components/auth_store/store';

type Anchor = 'Login' | 'left' | 'bottom' | 'right' | 'top';

const Login = observer(() => {
  const { loginAction } = useContext(AuthCTX)
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  return (
    <div>
      {['Login'].map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer('right', true)}>{anchor}</Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            <Typography sx={{ textAlign: 'center', fontSize: 20, padding: '15px 0 0' }}>LOGIN</Typography>
            <Stack spacing={2} sx={{ padding: '10px', minWidth: 300 }}>
              <TextField id="outlined-basic" label="Email" variant="outlined" />
              <TextField id="outlined-basic" label="Password" variant="outlined" />

              <Button variant="contained" onClick={() => loginAction({ username: 'string', password: 'string' })}>Login</Button>
            </Stack>
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
})

export default Login

