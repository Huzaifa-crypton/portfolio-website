import "./NavBar.css";
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
import { Chip, Avatar } from "@mui/material";

const drawerWidth = 240;
const navItems = { 'Home': "/", "Projects": "#project", 'Blogs': "https://www.educative.io/profile/view/4559692215615488", 'Contact': "#contact" };

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    console.log("prevState", mobileOpen);
    setMobileOpen(prevState => !prevState); // Toggle drawer visibility
  };

  const drawer = (
    <Box // Close the drawer when a link is clicked
      sx={{ textAlign: 'center', overflow: 'hidden', backgroundColor: "rgba(0, 0, 0, 0)" }}
    >
      <List>
        {Object.keys(navItems).map((key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleDrawerToggle()}>
              <a
                className="menu"
                href={navItems[key]} // Close the drawer on link click
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
    <Box sx={{ display: 'flex', maxWidth: "100vw", overflow: "hidden", justifyContent: 'start' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
        justifyContent: 'center',
        height: "70px",
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(3px)",
        overflow: "hidden",
      }}>
        <Toolbar sx={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: "100vw",
          overflow: "hidden",
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: "100vw",
            flexGrow: 1,
            overflow: "hidden",
          }}>
            <Chip
              avatar={<Avatar alt="Natacha" src={logo} sx={{ height: '50px', width: "50px" }} />}
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
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }} // Show only on small screens
          >
            <MenuIcon sx={{ color: 'whitesmoke' }} />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: "center", alignItems: "center" }}>
            {Object.keys(navItems).map((key, index) => (
              <a
                key={index}
                className="menu"
                href={navItems[key]}
                onClick={() => handleDrawerToggle()} // Close the drawer on link click
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
          onClose={() => handleDrawerToggle()} // Close the drawer on close
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              maxHeight: "100vh",
              overflow: "auto",
              backgroundColor: "rgba(255, 255, 255, 0.07)",
              backdropFilter: "blur(2px)",
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
