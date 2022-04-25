import API from "../../../../../utils/httpClient";
import { getFromPersistance } from "../../../../../utils/functions";

export const servantListAPi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "servant/list",
  });
};

export const servantApprovalApi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "servant/change-status",
  });
};
