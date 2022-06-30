import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Link } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

import logo from "../assets/images/logo.png";
import SupplierPlatform from './modals/SupplierPlatform'

const Header = ({setCoffee, coffee}) => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static" sx={{backgroundColor: "#103037"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href='/'>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img src={logo} alt="logo" />
            </Box>
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link
                variant="body2"
                underline="none"
                href='/'
                sx={{ my: 2, mx: 5, color: "white", display: "block" }}
              >
                Home
              </Link>
              
              <Link
                variant="body2"
                underline="none"
                href='/about'
                sx={{ my: 2, mx: 2, color: "white", display: "block" }}
              >
                About Us
              </Link>
              <Link
                variant="body2"
                href='/contact'
                underline="none"
                sx={{my: 2, mx: 2, color: "white", display: "block" }}
              >
                Contact Us
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <SupplierPlatform setCoffee={setCoffee} coffee={coffee} />
            </Box>

            {/* small size */}

           
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Link href='/'>
              <img src={logo} alt="logo" />
            </Link>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link textAlign="center" href="/" sx={{color:'#103037', textDecoration:'none'}}>Home</Link>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Link textAlign="center" href="/about" sx={{color:'#103037', textDecoration:'none'}}>About Us</Link>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Link textAlign="center" href="/contact" sx={{color:'#103037', textDecoration:'none'}}>Contact Us</Link>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <SupplierPlatform setCoffee={setCoffee} coffee={coffee} />
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
