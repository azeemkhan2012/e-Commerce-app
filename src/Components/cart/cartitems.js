import { Button, Card, CardActions, CardContent, CardMedia, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
// import img1 from "../Data/img/product1";

const CartItems = ({ isOpen, handleClose }) => {
    const [Quantity, setQuantity]= useState(1);
const handleAddQuantity = ()=>{
    setQuantity(Quantity+1)
}
const handleSubQuantity = ()=>{
    setQuantity(Quantity-1)
}
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={handleClose}
    >
      <Card sx={{ maxWidth: 345 }}>
        Cart Area
      <CardMedia
        component="img"
        alt="green iguana"
        height="80"
        width= "80"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small" onClick={handleSubQuantity}> - </Button>{Quantity}<Button size="small" onClick={handleAddQuantity}> + </Button>
        <Button size="small">$300</Button>
        <Button size="small">remove</Button>
      </CardActions>
    </Card>
    </Drawer>
  );
};

export default CartItems;
