import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

export const viewProfileApi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "user/view-mobile-profile",
  });
};

export const updateProfileApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "user/submit-mobile-profile",
    data,
  });
};
