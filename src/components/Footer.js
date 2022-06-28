import React from "react";

import { Container, Grid, Box, Typography, Link } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import useStyles from "../style/style";

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <footer>
        <Box
          bgcolor={"#103037"}
          color="white"
          m={{ sm: 1, md: 2 }}
          p={{ sm: 1, md: 2 }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={10} justify="center">
              <Grid item md={4} sm={12} xs={12}>
                <Box
                  mb={{ sm: 3 }}
                  justifyContent="center"
                  alignItems="center"
                  display={"flex"}
                >
                  <Typography variant="h6" align="center" sx={{textDecoration:'underline'}}>
                    <strong>Help and Contact</strong>
                  </Typography>{" "}
                </Box>
                <Typography variant="body2" align="center">
                  <Box mb={{ sm: 1 }}>Book mall #432, Addis Ababa</Box>
                  <Box mb={{ sm: 1 }}>+2519-000-000-00</Box>
                  <Box>
                    <Link href="mailto:kofisupport@gmail.com" underline='none'color="inherit">
                      kofisupport@gmail.com
                    </Link>
                  </Box>
                </Typography>
              </Grid>
              <Grid item md={3} sm={12} xs={12}>
                <Box
                  mb={{ sm: 3 }}
                  justifyContent="center"
                  alignItems="center"
                  display={"flex"}
                >
                  <Typography variant="h6" sx={{textDecoration:'underline'}}>Other Pages</Typography>{" "}
                </Box>
                <Typography variant="body2" align="center">
                  <Box mb={{ sm: 1 }}>
                    <Link href="/about" underline='none' color="inherit">
                      About Us
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/contact" underline='none' color="inherit">
                      Contact Us
                    </Link>
                  </Box>
                </Typography>
              </Grid>

              <Grid item md={3} xs={12} alignItems="center">
                <Box
                  mb={{ sm: 3 }}
                  justifyContent="center"
                  alignItems="center"
                  display={"flex"}
                >
                  <Typography variant="h6">
                    <strong>Follow us on</strong>
                  </Typography>{" "}
                </Box>
                <Box
                  justifyContent="center"
                  alignItems="center"
                  display={"flex"}
                >
                  <Link href="/" color="inherit">
                    <Box marginRight={{ sm: 2 }} display="inline-block">
                      <FacebookIcon fontSize="large" />
                    </Box>
                    <Box marginRight={{ sm: 2 }} display="inline-block">
                      <InstagramIcon fontSize="large" />
                    </Box>
                    <Box marginRight={{ sm: 2 }} display="inline-block">
                      <TelegramIcon fontSize="large" />
                    </Box>
                    <Box marginRight={{ sm: 2 }} display="inline-block">
                      <LinkedInIcon fontSize="large" />
                    </Box>
                  </Link>
                </Box>
              </Grid>

              <Grid item md={2} sm={12} xs={12} sx={{mt:2}}>
              <Box
                  mb={{ sm: 3 }}
                  justifyContent="center"
                  alignItems="center"
                  display={"flex"}
                >
                  <Typography>
                    @2022 kofi. All right Reserved.</Typography>{" "}
                    </Box>
              </Grid>

             
             
            </Grid>
          </Container>
        </Box>
      </footer>
    </div>
  );
}

export default Footer;
