import API from "../../../utils/httpClient";

export const loginApi = async (data) => {
  console.log(data);
  return API.request({
    method: "POST",
    url: "user/login",
    data,
  });
};
