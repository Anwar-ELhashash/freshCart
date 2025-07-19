import { apiClient } from "./api-client";

export async function addProductToWishlist({ id }) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: "/wishlist",
      method: "POST",
      data: {
        productId: id,
      },
    };
    const response = apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getWishlistItems() {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: "wishlist",
      method: "GET",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function removeItemFromWishlist({ id }) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: `/wishlist/${id}`,
      method: "DELETE",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
