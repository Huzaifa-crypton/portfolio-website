import "./NavBar.css"
import logo from "../../images/MuhammadHuzaifaKhan.jpeg";
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {Chip, Avatar, Typography } from "@mui/material";

const drawerWidth = 240;
const navItems = { 'Home': "#home", "Projects": "#project", 'Blogs': "https://www.educative.io/profile/view/4559692215615488", 'Contact': "#contact" };

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {Object.keys(navItems).map(key => (
          <ListItem key={key} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              {/* <ListItemText primary={key} /> */}
              <a className="menu" href={navItems[key]}
                sx={{
                }}
              >
                {key}
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ justifyContent: 'center', height: "70px", backgroundColor: "rgba(58, 58, 58, 0.32)", backdropFilter: "blur(3px)", boxShadow: 'none', paddingLeft: { xs: "none", sm: "30px" }, paddingRight: { xs: "none", sm: "50px" } }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Chip
              avatar={<Avatar alt="Natacha" src={logo} sx={{height:'50px', width:"50px"}} />}
              label="Huzaifa"
              variant="outlined"
              href="/"
              component="a"
              sx={{
                backgroundColor: "rgba(28, 28, 28, 0.25)",
                color: "white",
                width: "150px",
                border: "0.5px solid rgba(255, 255, 255, 0.16)",
                padding: "5px",
                height: "fit-content",
                fontSize: "24px",
                fontFamily: "calibri",
                borderRadius: "50px"
              }}
            />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"

            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: 'whitesmoke' }} />
          </IconButton> 
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: "center", alignItems: "center" }}>
            {Object.keys(navItems).map((key, index) => (
              <a
                key={index}  // Ensure each element has a unique key. Here we use index for simplicity
                className="menu"
                href={navItems[key]}
                sx={{
                }}
              >
                {key}
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' }, position: 'absolute',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>

  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
