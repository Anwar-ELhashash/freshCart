import { createContext, useEffect, useState } from "react";
import {
  addProductToWishlist,
  getWishlistItems,
  removeItemFromWishlist,
} from "../services/wishlist-service";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

// eslint-disable-next-line react-refresh/only-export-components
export const WishlistContext = createContext(null);

export default function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [allIds, setAllIds] = useState(null);

  // Using Redux With Token
  const { token } = useSelector((store) => {
    return store.tokenReducer;
  });

  async function handelAddProductToWishList({ id }) {
    const loading = toast.loading("Loading...");
    try {
      setIsLoading(true);
      const response = await addProductToWishlist({ id });
      if (response.success) {
        setIsLoading(false);
        toast.success(response.data.message);
        displayWishlistProducts();
        setAllIds(response.data.data);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error);
      setIsError(true);
      toast.error("error");
    } finally {
      toast.dismiss(loading);
      setIsLoading(false);
    }
  }

  async function displayWishlistProducts() {
    try {
      setIsLoading(true);
      const response = await getWishlistItems();
      if (response.success) {
        setIsLoading(false);
        setWishlist(response.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handelRemoveItemFromWishlist({ id }) {
    const loading = toast.loading("Loading...");
    try {
      setIsLoading(true);
      const response = await removeItemFromWishlist({ id });
      if (response.success) {
        toast.success(response.data.message);
        displayWishlistProducts();
        setAllIds(response.data.data);
      }
    } catch (error) {
      setIsError(true);
      setError(error);
    } finally {
      toast.dismiss(loading);
      setIsLoading(false);
    }
  }

  function clearWishlist() {
    if (allIds !== null) {
      allIds.map((id) => {
        handelRemoveItemFromWishlist({ id });
      });
    }
  }

  useEffect(() => {
    if (token) {
      displayWishlistProducts();
    }
  }, [token]);

  return (
    <WishlistContext.Provider
      value={{
        setIsLoading,
        isLoading,
        isError,
        error,
        wishlist,
        setWishlist,
        handelAddProductToWishList,
        displayWishlistProducts,
        handelRemoveItemFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
