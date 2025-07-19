import { apiClient } from "./api-client";

export async function getAllProducts({
  page,
  priceLessThan,
  priceGreaterThan,
  category,
  brand,
  keyword,
  sortBy,
} = {}) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: `/products?${page ? `page=${page}` : ""}${
        priceLessThan ? `&price[lte]=${priceLessThan}` : ""
      }${priceGreaterThan ? `&price[gte]=${priceGreaterThan}` : ""}${
        category ? `&category=${category}` : ""
      }${brand ? `&brand=${brand}` : ""}${keyword ? `&keyword=${keyword}` : ""}${
        sortBy ? `&sort=${sortBy}` : ""
      }`,
      method: "GET",
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getProductById({ id }) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: `/products/${id}`,
      method: "GET",
    };

    const response = await apiClient.request(options);

    return response;
  } catch (error) {
    throw error;
  }
}
