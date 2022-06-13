import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Drawer, Button } from '@mui/material';
import Login from 'pages/login';
import Sidebar from '../sidebar';
import { DrawerCTX } from './store';

const MuiDrawer = observer(() => {
  const { openDrawer, setOpenDrawer } = useContext(DrawerCTX)

  const isToken = localStorage.getItem('access_token');

  return (
    <div>
      <Button onClick={() => setOpenDrawer(true)}>{localStorage.getItem('access_token') ? 'User' : 'Login'}</Button>
      <Drawer
        anchor={'right'}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        {isToken ? <Sidebar /> : <Login onClose={() => setOpenDrawer(false)} />}
      </Drawer>
    </div>
  );
})

export default MuiDrawer

