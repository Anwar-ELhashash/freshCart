import {
  addProductToCart,
  clearCart,
  getCartItems,
  removeItemFromCart,
  updateQuantityOfProduct,
} from "../services/cart-service";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext(null);

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function CartProvider({ children }) {
  const [cartInfo, setCartInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  // Using Redux With Token
  const { token } = useSelector((store) => {
    return store.tokenReducer;
  });

  // * Add Item To Cart
  async function handelAddProductToCart({ id }) {
    const toastLoading = toast.loading("Loading");
    try {
      setIsLoading(true);
      const response = await addProductToCart({ id });
      if (response.success) {
        setCartInfo(response.data);
        toast.success(response.data.message);
        handelGetCartItems();
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      toast.dismiss(toastLoading);
      setIsLoading(false);
    }
  }

  // ^ Get Items Products
  async function handelGetCartItems() {
    try {
      setIsLoading(true);
      const response = await getCartItems();
      if (response.success) {
        setCartInfo(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
      setIsLoading(false);
    }
  }

  // ! Remove Item From Cart
  async function handelRemoveItemFromCart({ id }) {
    try {
      const alertResult = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        iconColor: "#d33",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#99a1af",
        confirmButtonText: "Yes, delete it!",
      });

      if (alertResult.isConfirmed) {
        const loadingId = toast.loading("Deleting Item...");
        const response = await removeItemFromCart({ id });
        if (response.success) {
          toast.dismiss(loadingId);
          setCartInfo(response.data);
        }
      }
    } catch (error) {
      setError(error);
    }

    // try {
    //   setIsLoading(true);
    //   const response = await removeItemFromCart({ id });
    //   if (response.success) {
    //     setCartInfo(response.data);
    //     setIsLoading(false);
    //   }
    // } catch (error) {
    //   setIsError(true);
    //   setError(error);
    //   setIsLoading(false);
    // }
  }

  // ! Clear Cart
  async function clearAllItems() {
    const clearLoading = toast.loading("Loading");
    try {
      const response = await clearCart();
      if (response.success) {
        setCartInfo(null);
        handelGetCartItems();
        toast.success("Cart Is Clear");
      }
    } catch (error) {
      setError(error);
    } finally {
      toast.dismiss(clearLoading);
    }
  }

  // * Change Item Quantity
  async function handelQuantityOfProduct({ id, count }) {
    const quantityLoading = toast.loading("Wait...");
    try {
      const response = await updateQuantityOfProduct({ id, count });
      if (response.success) {
        setCartInfo(response.data);
        toast.success("Done");
      }
    } catch (error) {
      setError(error);
      toast.error("Fail");
    } finally {
      toast.dismiss(quantityLoading);
    }
  }

  useEffect(() => {
    if (token) {
      handelGetCartItems();
    }
  }, [token]);

  return (
    <CartContext.Provider
      value={{
        cartInfo,
        isLoading,
        isError,
        error,
        handelAddProductToCart,
        handelGetCartItems,
        handelRemoveItemFromCart,
        clearAllItems,
        handelQuantityOfProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
