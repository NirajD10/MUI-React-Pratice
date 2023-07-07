import { Facebook, Mail } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Fade, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'


const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 1rem',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
}))

const Icons = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    [ theme.breakpoints.down('sm') ]: {
        gap: '10px'
    }
}))


const Navbar = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false);
    const [ anchorEl, setAnchorEl ] = useState(null);

    const toggleMenuHandler = (event) => {
        setToggleMenu(true)
        setAnchorEl(event.currentTarget)
    }
    return (
        <AppBar position='sticky'>
            <StyledToolBar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>Niraj Dev</Typography>
                <Facebook sx={{ width: 35, height: 35, display: { xs: 'block', sm: 'none' } }} />
                <Search><InputBase placeholder='Search..' sx={{ width: '100%' }} /></Search>
                <Icons>
                    <Badge sx={{ cursor: 'pointer' }} badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Avatar id="profileacc" sx={{ width: 35, height: 35, cursor: 'pointer', xs: { width: 30, height: 30 } }} alt="User"
                        src="https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={(event) => toggleMenuHandler(event)}
                    />
                    <Menu
                        id="profile"
                        MenuListProps={{
                            'aria-labelledby': 'profile',
                        }}
                        anchorEl={anchorEl}
                        open={toggleMenu}
                        onClose={() => setToggleMenu(false)}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={() => setToggleMenu(false)}>Profile</MenuItem>
                        <MenuItem onClick={() => setToggleMenu(false)}>My account</MenuItem>
                        <MenuItem onClick={() => setToggleMenu(false)}>Logout</MenuItem>
                    </Menu>
                </Icons>
            </StyledToolBar>
        </AppBar>
    )
}

export default Navbar