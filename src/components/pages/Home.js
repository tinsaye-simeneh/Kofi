import React, { useState } from "react";
import CarouselImg from "../../assets/images/carousel.jpg";
import CoffeeCard from "../CoffeeCard";
import { Container, Box, Grid, Button } from "@mui/material";

const coffeeData = [
  {
    name: "hulu coffee",
    price: 45,
    category: "coffee",
    telegram: "no",
    phone: "60",
  },
];

export default function Home() {
  const [coffee, setCoffee] = useState(coffeeData);
  const submitHandler = (d) => {
    setCoffee([...coffee, d]);
  };

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
          <Grid item md={12} sx={{ mt: 3, backgroundColor: "white" }}>
            <Box
              alignItems="center"
              justifyContent="center"
              display={{ xs: "none", lg: "flex" }}
              sx={{ m: 2 }}
            >
              <Button
                variant="contained"
                sx={{ mx: 2, backgroundColor: "#103037" }}
              >
                categ. 1
              </Button>
              <Button
                variant="contained"
                sx={{ mx: 2, backgroundColor: "#103037" }}
              >
                Categ. 2
              </Button>
              <Button
                variant="contained"
                sx={{ mx: 2, backgroundColor: "#103037" }}
              >
                Categ. 3
              </Button>
              <Button
                variant="contained"
                sx={{ mx: 2, backgroundColor: "#103037" }}
              >
                Categ. 4
              </Button>
              <Button
                variant="contained"
                sx={{ mx: 2, backgroundColor: "#103037" }}
              >
                Categ. 5
              </Button>
              <Button
                variant="contained"
                sx={{ mx: 2, backgroundColor: "#103037" }}
              >
                Categ. 6
              </Button>
              <Button
                variant="contained"
                sx={{ mx: 2, backgroundColor: "#103037" }}
              >
                Categ. 7
              </Button>
              <Button
                variant="contained"
                sx={{ mx: 2, backgroundColor: "#103037" }}
              >
                Categ. 8
              </Button>
            </Box>
          </Grid>
          {coffee?.map((cof) => {
            return (
              <Grid item md={3} xs={12}>
                <CoffeeCard data={cof} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
