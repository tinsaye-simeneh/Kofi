import React, { useState, useEffect } from "react";
import CarouselImg from "../../assets/images/carousel.jpg";
import CoffeeCard from "../CoffeeCard";
import { Container, Box, Grid, Button, Typography } from "@mui/material";


export default function Home({coffee}) {
 
  const [coffeeData, filterCoffeeData] = useState(coffee);
  const categories = ['all', 'Arabica','Espresso', 'Latte', 'Cappuccino', 'Macchiato','Americano', 'Irish Coffee']
  const [catState, toggleCat] = useState('all')
  const filterData = (by='all') => { 
    toggleCat(by)
    if (by === 'all') {
      filterCoffeeData(coffee)
    } else {
       const filtered = coffeeData?.filter((cf) => cf.category === by);
       filterCoffeeData(filtered);
    }
   
  }
  useEffect(()=> {
    filterData(catState)
  }, [coffee])
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={0} justify="center">
          <Grid item md={12} sx={{ backgroundColor: "yellow" }}>
            <Box alignItems="center" display={{ xs: "none", lg: "flex" }}>
              <img src={CarouselImg} alt="yes" height={300} width="50%" />
              <img src={CarouselImg} alt="yes" height={300} width="50%" />
            </Box>
          </Grid>
          <Grid item md={12} sx={{ mt: 3,pt:3, textAlign:'center',color:'white' }}>
          <Typography sx={{textDecoration:'underline'}} 
              display={{ xs: "none", lg: "inline" }}> Popular Categories</Typography>
          
            <Box
              alignItems="center"
              justifyContent="center"
              display={{ xs: "none", lg: "flex" }}
              sx={{ m: 2,backgroundColor: "white" }}
            >
             
              {categories.map((cat) => {
                return (
                  cat === catState ? <Button
                  variant="contained"
                  sx={{ m: 2, backgroundColor: "#3f50b5"}}
                  onClick={() => filterData(cat)}
                >
                  {cat}
                </Button> : <Button
                    variant="contained"
                    sx={{ m: 2, backgroundColor: "#103037"}}
                    onClick={() => filterData(cat)}
                  >
                    {cat}
                  </Button>
                  
                )
              })}
              
              
            </Box>
          </Grid>

          <Grid item xs={12} sx={{textAlign:'center',color:'white'}}>
          <Typography sx={{textDecoration:'underline'}} 
              display={{lg: "none" }}> Recent Products</Typography>
          
              </Grid>

          {coffeeData?.map((cof) => {
            return (
              <>
              <Grid item md={3} xs={12}>
                <CoffeeCard data={cof} />
              </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
