import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useCart } from "../myContext/context";

const CartItem = ({ cartEntity, updateTotalAmount }) => {
  const { cartItem, setCartItem } = useCart();

  const handleRemoveItem = (id) => {
    const cartItemIndex = cartItem.findIndex((item) => item.id === id);
    if (cartItemIndex >= 0) {
      cartItem.splice(cartItemIndex, 1);
      setCartItem([...cartItem]);
    }
  };
  const handleQuantityChange = (item, method) => {
    if (method === "add") {
      item.quantity += 1;
    } else if (item.quantity > 1) {
      item.quantity -= 1;
    }
    updateTotalAmount();
  };

  return (
    <>
      <Card sx={{ my: "20px" }}>
        <CardMedia
          component="img"
          alt="Adidas Hodie"
          height="120px"
          image={cartEntity.productImg}
          sx={{ objectFit: "scale-down" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "black", fontSize: "1.2rem", fontWeight: "bolder" }}
          >
            {cartEntity.title}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => handleQuantityChange(cartEntity, "sub")}>
              -
            </Button>
            <Button disabled>{cartEntity.quantity}</Button>
            <Button onClick={() => handleQuantityChange(cartEntity, "add")}>
              +
            </Button>
          </ButtonGroup>
          <Typography
            size="small"
            sx={{ color: "black", fontSize: "1.15rem", fontWeight: "bolder" }}
          >
            ${cartEntity.quantity * cartEntity.price}
          </Typography>
          <IconButton
            aria-label="delete"
            color="error"
            variant="outlined"
            size="small"
            onClick={() => handleRemoveItem(cartEntity.id)}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default CartItem;
