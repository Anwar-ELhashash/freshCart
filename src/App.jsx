// #startRegion importing
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Brands from "./pages/Brands/Brands.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Login from "./pages/Login/Login.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import SearchProduct from "./pages/SearchProduct/SearchProduct.jsx";
import Signup from "./pages/SignUp/Signup.jsx";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail.jsx";
import Wishlist from "./pages/Wishlist/Wishlist.jsx";
import { Toaster } from "react-hot-toast";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import TokenProvider from "./context/Token.context.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import GuardRoute from "./components/GuardRoute/GuardRoute.jsx";
import CartProvider from "./context/Cart.context.jsx";
import ResetPassword from "./pages/ResetPassword/ResetPassword.jsx";
import FeaturedProductsPage from "./pages/FeaturedProductsPage/FeaturedProductsPage.jsx";
import MenCategoryProducts from "./pages/MenCategoryProducts/MenCategoryProducts.jsx";
import WomenCategoryProducts from "./pages/WomenCategoryProducts/WomenCategoryProducts.jsx";
import ElectronicsCategoryProducts from "./pages/ElectronicsCategoryProducts/ElectronicsCategoryProducts.jsx";
import AllCategories from "./pages/AllCategories/AllCategories.jsx";
import WishlistProvider from "./context/Wishlist.context.jsx";
import Offers from "./pages/Offers/Offers.jsx";
import { OrderProvider } from "./context/Order.context.jsx";
import OfflineScreen from "./components/OfflineScreen/OfflineScreen.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
      { path: "/brands", element: <Brands /> },
      { path: "/productDetails/:id", element: <ProductDetails /> },
      { path: "/searchProduct", element: <SearchProduct /> },
      { path: "/featured", element: <FeaturedProductsPage /> },
      { path: "/offers", element: <Offers /> },
      { path: "/allCategories", element: <AllCategories /> },
      { path: "/menCategory", element: <MenCategoryProducts /> },
      { path: "/womenCategory", element: <WomenCategoryProducts /> },
      { path: "/electronicsCategory", element: <ElectronicsCategoryProducts /> },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/allorders",
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
    ],
  },

  { path: "*", element: <NotFound /> },

  {
    path: "",
    element: (
      <GuardRoute>
        <Layout />
      </GuardRoute>
    ),
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/verifyEmail", element: <VerifyEmail /> },
      { path: "/forgotPassword", element: <ForgotPassword /> },
      { path: "/resetPassword", element: <ResetPassword /> },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 2 * 60 * 60 * 1000,
        gcTime: 5 * 60 * 60 * 1000,
        // refetchOnMount: false,
        // refetchInterval: 1000,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: true,
        // retry: 3,
        // retryDelay: 3000,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <OfflineScreen>
          <TokenProvider>
            <OrderProvider>
              <WishlistProvider>
                <CartProvider>
                  <RouterProvider router={routes} />
                  <Toaster />
                </CartProvider>
              </WishlistProvider>
            </OrderProvider>
          </TokenProvider>
        </OfflineScreen>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
