import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Check from '@mui/icons-material/Check';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


function Profiles() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Box>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ padding: 0 }}
                    aria-controls={open ? 'basic-button-profiles' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                <Avatar 
                    sx={{ width: 32, height: 32 }}
                    alt="Thanh Trình"
                    src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/438264125_2131241873894077_8092778218223626007_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=107&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeG40-zq4AxNvApRQeRUTfF5WIc3O2ZuJ_9Yhzc7Zm4n_2mQV8hsvBXAihcNUTFWgorkhHry8Lxs5YJPdGQOygl3&_nc_ohc=gVlkGrIFvScQ7kNvwGYXSAb&_nc_oc=Adnqhr58S5Of3_l-7LqbVlbYcG1LrHjYmfe6z43OCPER0XomrY5LtBIYsmYkb7TA7MgmfvdWntGj2Jade_gaqj7l&_nc_zt=24&_nc_ht=scontent.fdad3-6.fna&_nc_gid=jyRz5LMiNCO8USAdHoPS0g&oh=00_AfSElIZBf1J00oJ_35B9DqcQ74Jb_rSyMOq7DQZ3EJhxUg&oe=68756DF4"
                />
                </IconButton>
                </Tooltip>
            <Menu
                id="basic-menu-profiles"
                slotProps={{
                list: {
                    'aria-labelledby': 'basic-button-profiles'
                },
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
               
            >
                <MenuItem onClick={handleClose}>
                <Avatar  sx={{ width: 28, height: 28, mr: 2 }}/> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <Avatar sx={{ width: 28, height: 28, mr: 2 }}/> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default Profiles