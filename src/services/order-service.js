import { apiClient } from "./api-client";

export async function createCashOrder({ id, values }) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: `/orders/${id}`,
      method: "POST",
      data: { values },
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function createOnlineOrder({ id, values }) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: `/orders/checkout-session/${id}?url=http://localhost:5173`,
      method: "POST",
      data: { values },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getAllOrders({ id }) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: `orders/user/${id}`,
      method: "GET",
    };
    const response = apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
