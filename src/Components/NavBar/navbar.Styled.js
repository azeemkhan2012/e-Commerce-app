import styled from "@emotion/styled";
import { Box } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";

export const BrandName = styled(Box)`
  color: black;
  /* flex-grow: 1; */
  /* display : flex;
align-items: center; */

  p {
    font-size: 2rem;
    font-weight: bolder;
    font-variant-caps: petite-caps;
  }
`;

export const LogoImage = styled(Box)`
  img {
    width: 100px;
    height: 100px;
  }
`;
export const StyledToolbar = styled(Toolbar)`
  background-image: linear-gradient(#dde3e5, #ffffff);
  display: flex;
  justify-content: space-between;
`;
