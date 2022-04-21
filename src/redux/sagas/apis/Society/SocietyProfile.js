import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";
const state = getFromPersistance("kunji_auth_data");

export const getSocietyProfileApi = async () => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society-admin/profile",
  });
};
