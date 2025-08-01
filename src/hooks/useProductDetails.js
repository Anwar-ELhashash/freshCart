import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/products-service";

export default function useProductDetails(id) {
  const {
    data: productDetails,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["productDetails", id],
    queryFn: () => {
      return getProductById({ id });
    },
    select: (data) => data.data.data,
  });

  return { productDetails, isLoading, isError, error };
}
