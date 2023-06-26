import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CartArea from "../cart/cartArea";
import { BrandName, LogoImage, StyledToolbar } from "./navbar.Styled";
import { Badge, Typography } from "@mui/material";
import logo from './logo/logo.png'
import { useCart } from "../myContext/context";


const ButtonAppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleCartEmpty = () =>{
    setIsOpen(false)
  }
  const {cartItem} = useCart();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CartArea isOpen={isOpen} handleClose={handleClose} handleCartEmpty = {handleCartEmpty}/>
      <AppBar position="fixed" >
        <StyledToolbar>
          <LogoImage>
          <img src={logo} alt='KHAN STORE'/> 

          </LogoImage>
          <BrandName>
            <Typography> The Khan Store</Typography>
          </BrandName>
          <Button color="inherit" onClick={handleOpen} disabled={!cartItem.length}>
          <Badge badgeContent={cartItem.length} color="success">
            <LocalMallIcon sx={{color:"black"}}/>
          </Badge>
          </Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar;