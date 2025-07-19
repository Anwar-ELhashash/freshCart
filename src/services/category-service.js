import { apiClient } from "./api-client";

export async function getAllCategories() {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: "/categories",
      method: "GET",
    };
    let response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
