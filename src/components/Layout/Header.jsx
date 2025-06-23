import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Menu, MenuItem, Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Menu as MenuIcon, Add as AddIcon } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = React.useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
    navigate('/login');
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
          onClick={handleMobileMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          Musician Gear Tracker
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {isAuthenticated ? (
            <>
              <Button color="inherit" component={Link} to="/dashboard">
                Dashboard
              </Button>
              <Button color="inherit" component={Link} to="/equipment">
                Equipment
              </Button>
              <Button color="inherit" component={Link} to="/maintenance">
                Maintenance
              </Button>
              <Button color="inherit" component={Link} to="/locations">
                Locations
              </Button>
              <IconButton color="inherit" component={Link} to="/equipment/add">
                <AddIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar 
                  src={user?.profileImageUrl} 
                  alt={user?.name?.charAt(0).toUpperCase() || 'U'} 
                  sx={{ width: 32, height: 32 }}
                >
                  {!user?.profileImageUrl && (user?.name?.charAt(0).toUpperCase() || 'U')}
                </Avatar>
              </IconButton>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>

      {/* User Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem component={Link} to="/settings" onClick={handleMenuClose}>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

      {/* Mobile Menu */}
      <Menu
        anchorEl={mobileMenuAnchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(mobileMenuAnchorEl)}
        onClose={handleMenuClose}
      >
        {isAuthenticated ? (
          <>
            <MenuItem component={Link} to="/dashboard" onClick={handleMenuClose}>
              Dashboard
            </MenuItem>
            <MenuItem component={Link} to="/equipment" onClick={handleMenuClose}>
              Equipment
            </MenuItem>
            <MenuItem component={Link} to="/maintenance" onClick={handleMenuClose}>
              Maintenance
            </MenuItem>
            <MenuItem component={Link} to="/locations" onClick={handleMenuClose}>
              Locations
            </MenuItem>
            <MenuItem component={Link} to="/equipment/add" onClick={handleMenuClose}>
              Add Equipment
            </MenuItem>
            <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
              Profile
            </MenuItem>
            <MenuItem component={Link} to="/settings" onClick={handleMenuClose}>
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              Logout
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
              Login
            </MenuItem>
            <MenuItem component={Link} to="/register" onClick={handleMenuClose}>
              Register
            </MenuItem>
          </>
        )}
      </Menu>
    </AppBar>
  );
};

export default Header;