import React from "react";
import { Container, Grid, Box, Typography, Link } from "@mui/material";
import side from '../../assets/images/side.jpg'

const About = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{mt:5}}>
        <Grid container spacing={0} justify="center">
          <Grid item md={6} sx={{backgroundColor:'yellow'}}>
          <Box
                  alignItems="center"
                  display={{ xs: "none", lg: "flex" }}
                >
                    <img src={side} alt="yes" height={500} width='auto'/>
                </Box>
          </Grid>
          <Grid item md={6} xs={12} sx={{backgroundColor:'yellow'}}>
          <Box
                  mb={{ sm: 3 }}
                  justifyContent="center"
                  alignItems="center"
                  display='flex'
                >
                  <Typography variant="h6" align="center" sx={{textDecoration:'underline'}}>
                    <strong>Help and Contact</strong>
                  </Typography>{" "}
                </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
