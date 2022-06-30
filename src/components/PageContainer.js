import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";

const PageContainer = ({Header, SideImage, Content, Height}) => {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={0} justify="center">
          <Grid item md={6} sx={{ backgroundColor: "white" }}>
            <Box alignItems="center" display={{ xs: "none", lg: "flex" }}>
              <img src={SideImage} alt="yes" height={Height} width="100%" />
            </Box>
          </Grid>
          <Grid item md={6} xs={12} sx={{ backgroundColor: "white", px:3}}>
            <Box
              mb={{ sm: 3 }}
              justifyContent="center"
              alignItems="center"
              display="flex"
            >
              <Typography
                variant="h6"
                align="center"
                sx={{ textDecoration: "underline", mt: 2, color:'#103037' }}
                display={{ xs: "block", lg: "none" }}
              >
                <strong>{Header}</strong>
              </Typography>{" "}
            </Box>

            <Box
              mb={{ sm: 3 }}
              justifyContent="center"
              alignItems="center"
              display='flex'
            >
            {Content}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PageContainer;
