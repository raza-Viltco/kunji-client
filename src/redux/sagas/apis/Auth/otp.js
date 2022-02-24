import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

export const registerOtpApi = async (data) => {
  const token = getFromPersistance("Bearer_Otp_Token");
  return API.request({
    headers: { Authorization: `Bearer ${token}` },
    method: "POST",
    url: "user/verify-otp",
    data,
  });
};

export const forgotPasswordOtpApi = async (data) => {
  console.log(data)
  return API.request({
    method: "POST",
    url: "user/forgot-password-otp-submit",
    data,
  });
};
