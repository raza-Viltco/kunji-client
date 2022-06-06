import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

export const termsApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "society/update-terms-conditions?",
    data,
  });
};
