import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

export const addBuildingApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "society-admin/mapping/level-one",
    data,
  });
};

export const getBuildingApi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  const { society_id } = state.data.role;
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/mapping-one",
    params: { society_id: society_id },
  });
};
