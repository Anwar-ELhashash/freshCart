import { useQuery } from "@tanstack/react-query";
import { getAllOrders } from "../services/order-service";

export default function useOrders(id) {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: () => {
      return getAllOrders({ id });
    },
  });

  return { orders: data?.data, isError, isLoading, error };
}
