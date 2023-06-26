import { Button, Card, Divider, Drawer, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useCart } from "../myContext/context";
import CartItem from "./CartItem";

const CartArea = ({ isOpen, handleClose, handleCartEmpty }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cartItem, setCartItem } = useCart();

  const updateTotalAmount = () => {
    let total = 0;
    cartItem.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalAmount(total);
  };

  const handleCheckOut = (event) => {
    event.preventDefault();
    
    alert("THANK YOU FOR SHOPPING WITH US");
    setCartItem([])

  };

  useEffect(() => {
    updateTotalAmount();
  }, [cartItem]);

  return (
    <Drawer anchor="right" sx={{height:'100px'}} open={isOpen} onClose={handleClose} className="test">
      <Typography>YOUR CART</Typography>
      <Button>X</Button>
      <Divider/>
      <Card
        sx={{
          maxWidth: 500,
          minWidth: 350,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {cartItem.length > 0 ? (
          <>
            {cartItem.map((item) => (
              <CartItem
                cartEntity={item}
                updateTotalAmount={updateTotalAmount}
                key={item.id}
              />
            ))}
            <Divider />
            <Typography sx={{color:"black", fontSize:'1.2rem', fontWeight:'bolder'}}>TOTAL: {totalAmount}</Typography>
            <Divider />
            <Button
              variant="contained"
              color="success"
              sx={{ display: "flex", justifyContent: "center" }}
              onClick={handleCheckOut}
            >
              Check Out
            </Button>
          </>
        ) : (
          <>
           ---- Continue shopping with us
          </>
        )}
      </Card>
    </Drawer>
  );
};

export default CartArea;
