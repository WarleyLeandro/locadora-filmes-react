import AppRoutes from "./routes";
import { CartProvider } from "./context/cart";
function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
