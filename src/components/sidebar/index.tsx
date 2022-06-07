import { Paper, MenuList, MenuItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { clearLocalStorage } from '../../services/storage.service';
import { useContext } from 'react';
import { LoaderCTX } from '../loader/store';
import { observer } from 'mobx-react-lite';

const Sidebar = observer(() => {
  const { setLoader } = useContext(LoaderCTX)

  const logOut = () => {
    setLoader(true)
    setTimeout(() => {
      clearLocalStorage()
      setLoader(false)
    }, 5000)
  }

  return <Paper sx={{ width: 320, maxWidth: '100%' }}>
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <ContentCut fontSize="small" />
        </ListItemIcon>
        <ListItemText>My resume</ListItemText>
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <ContentPaste fontSize="small" />
        </ListItemIcon>
        <ListItemText>Setting</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <Cloud fontSize="small" />
        </ListItemIcon>
        <ListItemText onClick={logOut}>LogOut</ListItemText>
      </MenuItem>
    </MenuList>
  </Paper>
})

export default Sidebar