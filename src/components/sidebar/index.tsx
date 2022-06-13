import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Paper, MenuList, MenuItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import { ContentCut, ContentPaste, Cloud } from '@mui/icons-material';
import { clearLocalStorage } from 'services/storage.service';
import { LoaderCTX } from '../loader/store';

const Sidebar = observer(() => {
  const { setLoader } = useContext(LoaderCTX)

  const logOut = () => {
    setLoader(true)
    setTimeout(() => {
      clearLocalStorage()
      setLoader(false)
    }, 2000)
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