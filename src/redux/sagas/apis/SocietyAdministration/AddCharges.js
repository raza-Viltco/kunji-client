import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

const state = getFromPersistance("kunji_auth_data");

export const addChargesApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "charges-type/create-charges",
    data,
  });
};
