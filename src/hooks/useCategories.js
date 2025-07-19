import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/category-service";

export default function useCategories() {
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    select: (data) => data.data.data,
  });
  return { categories, isLoading, isError, error };
}
