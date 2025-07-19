import { createContext, useState } from "react";
import { createCashOrder, createOnlineOrder, getAllOrders } from "../services/order-service";
import toast from "react-hot-toast";

// eslint-disable-next-line react-refresh/only-export-components
export const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  async function handelCreateCashOrder({ id, values }) {
    const loading = toast.loading("Loading...");
    try {
      setIsLoading(true);
      const response = await createCashOrder({ id, values });
      if (response.success) {
        setIsLoading(false);
        toast.success("Success Order ✅");
      }
    } catch (error) {
      toast.error("Failed to Create Order");
      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
      toast.dismiss(loading);
    }
  }

  async function handelCreateOnlineOrder({ id, values }) {
    const loading = toast.loading("Loading...");
    try {
      setIsLoading(true);
      const response = await createOnlineOrder({ id, values });
      if (response.success) {
        setIsLoading(false);
        toast.success("Success Order ✅");
        setTimeout(() => {
          location.replace(response.data.session.url);
        }, 2000);
      }
    } catch (error) {
      toast.error("Failed to Create Order");
      setError(error);
      setIsError(true);
    } finally {
      toast.dismiss(loading);
      setIsLoading(false);
    }
  }

  async function handelGetAllOrders({ id }) {
    try {
      setIsLoading(true);
      const response = await getAllOrders({ id });
      if (response.success) {
        setIsLoading(false);
        setOrders(response.data);
      }
    } catch (error) {
      setError(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <OrderContext.Provider
      value={{
        handelCreateCashOrder,
        handelCreateOnlineOrder,
        handelGetAllOrders,
        orders,
        isLoading,
        isError,
        error,
        setOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
