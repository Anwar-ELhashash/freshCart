import { apiClient } from "./api-client"; // instance of axios

export async function sendDataToSignUp(values) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: `/auth/signup`,
      method: "POST",
      data: {
        name: values.name,
        email: values.email,
        password: values.password,
        rePassword: values.rePassword,
        phone: values.phone,
      },
    };

    const response = await apiClient.request(options); // used instance of axios
    return response;
  } catch (error) {
    throw error;
  }
}

export async function sendDataToSignIn(values) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: `/auth/signin`,
      method: "POST",
      data: {
        email: values.email,
        password: values.password,
      },
    };

    const response = await apiClient.request(options);

    return response;
  } catch (error) {
    throw error;
  }
}

export async function forgotPassword({ email }) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: "/auth/forgotPasswords",
      method: "POST",
      data: {
        email: email,
      },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function verifyResetCode({ resetCode }) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: "/auth/verifyResetCode",
      method: "POST",
      data: {
        resetCode: resetCode,
      },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function resetPassword({ email, newPassword }) {
  // eslint-disable-next-line no-useless-catch
  try {
    const options = {
      url: "/auth/resetPassword",
      method: "PUT",
      data: {
        email: email,
        newPassword: newPassword,
      },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
