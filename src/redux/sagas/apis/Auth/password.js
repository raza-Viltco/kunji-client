import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

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

export const updatePasswordApi = (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "user/change-password",
    data,
  });
};
