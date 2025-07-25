import Box from '@mui/material/Box';

import ModeSelect from '~/components/ModeSelect';
import AppIcon from "@mui/icons-material/Apps"
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import  Workspaces  from './Menus/Workspaces';
import  Recent  from './Menus/Recent';
import  Templates  from './Menus/Templates';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from './Menus/Profiles';

function AppBar() {
  return (
     <Box px={2} sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
        gap: 2,
        overflowX: 'auto',
        backgroundColor: 'background.default',
      }}>
      <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}> 
          <AppIcon sx={{ color: 'primary.main' }} />
          <Box sx={{display: 'flex', alignItems: 'center', gap: 0.5}}>
            <SvgIcon component={TrelloIcon} fontSize='small' inheritViewBox sx={{ color: 'primary.main' }} />
            <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main'}}>TeamBoard</Typography>
          </Box>
          
          <Box sx={{ display: {xs: 'none', md: 'flex', gap: 1}}}>
            <Workspaces />
            <Recent />
            <Templates />
            <Button variant="outlined">Create</Button>
          </Box>

        </Box>
        
        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
          <TextField id="outlined-search" label="Search..." type="search" size="small" sx={{ minWidth: '120px'}}/>
          <ModeSelect />

          <Tooltip title="Notifications">
            <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer'}}>
              <NotificationsNoneIcon sx={{ color: 'primay.main'}} />
            </Badge>
          </Tooltip>

          <Tooltip title="Help">
            <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primay.main'}}/>
          </Tooltip>

          <Profiles />
        </Box>

import ModeSelect from '../../components/ModeSelect';

function AppBar() {
  return (
     <Box sx={{
        backgroundColor: 'primary.light',
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect />

      </Box>
  )
}


export default AppBar

export default AppBar

