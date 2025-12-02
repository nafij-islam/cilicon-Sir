import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/commonComponents/Layout";
import ProductDeatilsPage from "./components/productDetails/Index";
import { quantityContext } from "./context/QuantityContext";
import AddToCart from "./pages/AddtoCart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SignUp from "./pages/SignUp";
const App = () => {
  const queryClient = new QueryClient();
   const { totalQuantity } = useSelector((state) => state.cartStore);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <quantityContext.Provider value={totalQuantity }>
                  <Layout />
                </quantityContext.Provider>
              }
            >
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:id" element={<ProductDeatilsPage />} />
              <Route path="cart" element={<AddToCart />} />
              <Route path="*" element={"no DAta Found"} />
            </Route>
            {/* auth */}
            <Route>
              <Route path="signup" element={<SignUp/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};
export default App;
