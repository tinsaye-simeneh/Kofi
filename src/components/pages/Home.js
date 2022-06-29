import React from 'react'
import CarouselImg from '../../assets/images/carousel.jpg'
import {Container, Box, Grid} from '@mui/material'

function Home (){
return(
    <>
    <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={0} justify="center">
          <Grid item md={12} sx={{ backgroundColor: "yellow" }}>
            <Box alignItems="center" display={{ xs: "none", lg: "flex" }}>
              <img src={CarouselImg} alt="yes" height={300} width='100%' />
            </Box>
          </Grid>
    </Grid>
    </Container>
    </>
)
}

export default Home;