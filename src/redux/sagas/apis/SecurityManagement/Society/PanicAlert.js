import API from "../../../../../utils/httpClient";
import { getFromPersistance } from "../../../../../utils/functions";

export const panicAlertList = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "panic-alerts/panic-alert-list",
  });
};
