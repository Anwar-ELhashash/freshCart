import { apiClient } from "./api-client";

export async function addProductToCart({ id }) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: `/cart`,
      method: "POST",
      data: {
        productId: id,
      },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getCartItems() {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: "/cart",
      method: "Get",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function removeItemFromCart({ id }) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: `/cart/${id}`,
      method: "DELETE",
    };

    const response = await apiClient.request(options);

    return response;
  } catch (error) {
    throw error;
  }
}

export async function clearCart() {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: "/cart",
      method: "DELETE",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function updateQuantityOfProduct({ id, count }) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: `/cart/${id}`,
      method: "PUT",
      data: {
        count: count,
      },
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
