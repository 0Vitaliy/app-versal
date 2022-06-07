import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Drawer, Button } from '@mui/material';
import Login from '../../pages/login';
import Sidebar from '../sidebar';

type Anchor = 'Login' | 'left' | 'bottom' | 'right' | 'top';

const MuiDrawer = observer(() => {
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

  const isToken = localStorage.getItem('access_token');

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}>{localStorage.getItem('access_token') ? 'User' : 'Login'}</Button>
      <Drawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        {isToken ? <Sidebar /> : <Login />}
      </Drawer>
    </div>
  );
})

export default MuiDrawer

