import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";
const state = getFromPersistance("kunji_auth_data");

export const viewSocietyApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/kunji-view-society",
    params: { society_id: data },
  });
};

export const societyStatusApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "society/change-status",
    data,
  });
};
