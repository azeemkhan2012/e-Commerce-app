import { BrowserRouter } from "react-router-dom";
import CartProvider from "./Components/myContext/context";
import Routers from "./Components/router/routes";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
