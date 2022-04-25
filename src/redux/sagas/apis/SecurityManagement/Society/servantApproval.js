import API from "../../../../../utils/httpClient";
import { getFromPersistance } from "../../../../../utils/functions";
const state = getFromPersistance("kunji_auth_data");

export const servantListAPi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "servant/list",
  });
};

export const servantApprovalApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "servant/change-status",
    data,
  });
};

export const gatePassApprovalApi = async () => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "servant/gate-pass-list",
  });
};
