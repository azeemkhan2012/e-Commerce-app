import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { productCat, products } from "../Data/Data";
import { useCart } from "../myContext/context";
import "./shop.css";

const Shop = () => {
  const { setCartItem, cartItem } = useCart();
  const handleAddtoCart = (item) => {
    const itemInCart = cartItem.find((a) => a.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      setCartItem((prev) => {
        const temp = [...prev, { ...item, quantity: 1 }];
        return temp;
      });
    }
  };
  const [category, setCategory] = useState(productCat.allCat);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <>
      <h4 className="slogan"> Gear up with adidas</h4>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-simple-select-label">Filters</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Categories"
          onChange={handleCategoryChange}
        >
          {Object.entries(productCat).map(([key, val]) => (
            <MenuItem value={val} key={key}>
              {val}
            </MenuItem>
          ))}
        
        </Select>
      </FormControl>
      <Grid container spacing={2} sx={{ p: "24px" }}>
        {products.map((item) => (
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
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button size="medium" onClick={() => handleAddtoCart(item)}>
                  Add to cart
                </Button>
                <Typography>${item.price}</Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Shop;
