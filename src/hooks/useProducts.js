import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/products-service";

export default function useProducts({ category } = {}) {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return getAllProducts({ category });
    },
    select: (data) => data.data.data,
  });

  return { products, isLoading, isError, error };
}
