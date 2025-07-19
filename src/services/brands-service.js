import { apiClient } from "./api-client";

export async function getBrands() {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: "/brands",
      method: "GET",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
