import React, { useState, useEffect } from "react";
import CarouselImg from "../../assets/images/carousel.jpg";
import CoffeeCard from "../CoffeeCard";
import {
  Container,
  Box,
  Grid,
  Button,
  Typography,
  Collapse,
  Link,
} from "@mui/material";

export default function Home({ coffee }) {
  const [isChecked, setIsChecked] = useState(false);
  const [coffeeData, filterCoffeeData] = useState(coffee);
  const categories = [
    "all",
    "Arabica",
    "Espresso",
    "Latte",
    "Cappuccino",
    "Macchiato",
    "Americano",
    "Irish Coffee",
  ];
  const [catState, toggleCat] = useState("all");

  const filterData = (by = "all") => {
    toggleCat(by);
    if (by === "all") {
      filterCoffeeData(coffee);
    } else {
      const filtered = coffee?.filter((cf) => cf.category === by);
      filterCoffeeData(filtered);
      console.log(filterCoffeeData.length);
    }
  };
  useEffect(() => {
    filterData(catState);
  }, [coffee]);

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

          <Grid
            item
            md={12}
            xs={12}
            sx={{ mt: 1, pt: 3, textAlign: "center", color: "white" }}
          >
            <Box>
            <Typography
              sx={{ textDecoration: "underline", fontSize:'20px' }}
              display={{ xs: "inline", lg: "inline" }}
            >
              Popular Categories
            </Typography>
            {isChecked == false?
            <Link
                display={{ xs: "inline", lg: "none" }}
                onClick={() => setIsChecked(!isChecked)}
                sx={{pl:1}}
                underline="none"
              >
                View
              </Link> :
              <Link
              display={{ xs: "inline", lg: "none" }}
              onClick={() => setIsChecked(!isChecked)}
              sx={{pl:1}}
              underline="none"
            >
              Close Category
            </Link>
}
            </Box>

            <Box
              alignItems="center"
              justifyContent="center"
              display={{ xs: "none", lg: "block" }}
              sx={{ m: 2, backgroundColor: "white" }}
            >
              {categories.map((cat) => {
                return cat === catState ? (
                  <Button
                    variant="contained"
                    sx={{ m: 2, backgroundColor: "#3f50b5" }}
                    onClick={() => filterData(cat)}
                  >
                    {cat}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    sx={{ m: 2, backgroundColor: "#103037" }}
                    onClick={() => filterData(cat)}
                  >
                    {cat}
                  </Button>
                );
              })}
            </Box>

            <Collapse in={isChecked}>
              <Box
                alignItems="center"
                justifyContent="center"
                display={{ xs: "block", lg: "none" }}
                sx={{ p: 2, mt: 2, backgroundColor: "white" }}
              >
                {categories.map((cat) => {
                  return cat === catState ? (
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ my: 1, backgroundColor: "#3f50b5" }}
                      onClick={() => filterData(cat)}
                    >
                      {cat}
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ my: 1, backgroundColor: "#103037" }}
                      onClick={() => filterData(cat)}
                    >
                      {cat}
                    </Button>
                  );
                })}
              </Box>
            </Collapse>
            <hr />
          </Grid>

          {coffeeData?.map((cof) => {
            return (
              <Grid item md={3} xs={12} sx={{mt:2}}>
                <CoffeeCard data={cof} />
              </Grid>
            );
          })}

          {coffeeData.length === 0 ? (
            <Grid
              item
              md={12}
              xs={12}
              sx={{ mt: 2, textAlign: "center", backgroundColor: "blue" }}
            >
              <Typography sx={{ color: "white" }}>
                This category has no Products, Please Choose another coffee
                category
              </Typography>
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      </Container>
    </>
  );
}
