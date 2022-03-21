import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

export const getFacilitiesApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/get-assets-facilities",
    data,
  });
};
