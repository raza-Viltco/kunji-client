import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

export const getSocietiesApi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/list",
  });
};

export const editSocietyListApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/view-data",
    params: { society_id: data },
  });
};
