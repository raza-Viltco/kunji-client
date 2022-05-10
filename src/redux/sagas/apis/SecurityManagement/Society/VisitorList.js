import API from "../../../../../utils/httpClient";
import { getFromPersistance } from "../../../../../utils/functions";
const state = getFromPersistance("kunji_auth_data");

export const visitorListApi = async () => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "visitor/list",
  });
};
