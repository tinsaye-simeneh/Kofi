import React from "react";
import coffeeImg from "../assets/images/thumb.jpg";
import OrderModal from './OrderModal'
import { Container, Box, Grid, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";

function coffeeCard({ data }) {
  return (
    <>
      <Card
        sx={{ maxWidth: 345, m: 2 }}
        alignItems="center"
        justifyContent="center"
        display={{ xs: "none", lg: "flex" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={coffeeImg}
            alt="coffee image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              #{data.category}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price:{data.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
         <OrderModal coffeeData={data}/>
        </CardActions>
      </Card>
    </>
  );
}

export default coffeeCard;
