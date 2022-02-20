import API from "../../../utils/httpClient";

export const forgotPasswordApi = async (data) => {
  return API.request({
    method: "POST",
    url: "user/forgot-password-request",
    data,
  });
};

export const recoverPasswordApi = async (data) => {
  return API.request({
    method: "POST",
    url: "user/forgot-password-submit",
    data,
  });
};
