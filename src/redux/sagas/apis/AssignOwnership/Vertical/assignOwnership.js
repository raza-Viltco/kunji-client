import API from "../../../../../utils/httpClient";
import { getFromPersistance } from "../../../../../utils/functions";

export const assignAppartmentDataApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  const { society_id } = state.data.role;

  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/mapping-three?society_id=7&mapping_two_id=1",
    params: { society_id: society_id, mapping_two_id: data },
  });
};
