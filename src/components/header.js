import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import useStyles from "../style";
import logo from "../assets/images/logo.png";

const Header = () => {
  const classes = useStyles();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl" className={classes.Container_bg}>
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img src={logo} alt="logo" />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                sx={{ my: 2, mx: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
              <Button
                sx={{ my: 2, mx: 2, color: "white", display: "block" }}
              >
                About Us
              </Button>
              <Button
                sx={{ my: 2, mx: 2, color: "white", display: "block" }}
              >
                Contact Us
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Button
                variant="contained"
                href="/supplier"
                style={{
                  backgroundColor: "white",
                  color: "#103037",
                  border: "none",
                }}
              >
                Supplier Platform
              </Button>
            </Box>

            {/* small size */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <img src={logo} alt="logo" />
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
                <MenuItem onClick={"/Home"}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>

                <MenuItem onClick={"/about"}>
                  <Typography textAlign="center">About Us</Typography>
                </MenuItem>

                <MenuItem onClick={"/contact"}>
                  <Typography textAlign="center">Contact Us</Typography>
                </MenuItem>

                <MenuItem onClick={"/supplier"}>
                  <Typography textAlign="center">Supplier platform</Typography>
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
