import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import useStyles from "../style";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footerBody}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            @2022 Kofi. All Right Reserved
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              flexDirection: "column",
              display: { xs: "flex", md: "flex" },
            }}
          >
            <h3 style={{ textDecoration: "underline" }}> Help and Contact </h3>
            <span className={classes.footerSpan}>
              {" "}
              Kofi Mall, Addis Ababa, Ethiopia
            </span>
            <span className={classes.footerSpan}> Phone: +251900000000</span>
            <span className={classes.footerSpan}>
              Email:
              <a href="mailto: kofisupport@gmail.com">kofisupport@gmail.com</a>
            </span>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
            hgsjh
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
};

export default Footer;
