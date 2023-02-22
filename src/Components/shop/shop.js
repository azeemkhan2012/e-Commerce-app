import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { products } from "../Data/Data";

const Cart = () => {
  const handleAddtoCart = () => {
    
  }
  return (
    <>
      <Grid container spacing={2} sx={{p:'24px'}}>
      {products.map((item)=>
        <Grid item sm={3} key={item.id}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={item.productImg}
        title={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.discription}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent: 'space-between'}}>
        <Button size="medium" >Add to cart</Button>
        <Button size="medium" >${item.price}</Button>
      </CardActions>
    </Card>
        </Grid>
      )}    
      </Grid>
    </>
  );
};
export default Cart;
