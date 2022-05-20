import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";


export const chargesListApi = () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "charges-type/get-charges-list",
  });
};
