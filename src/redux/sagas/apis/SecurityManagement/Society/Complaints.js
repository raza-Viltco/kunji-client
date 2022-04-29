import API from "../../../../../utils/httpClient";
import { getFromPersistance } from "../../../../../utils/functions";
const state = getFromPersistance("kunji_auth_data");

export const getCasesApi = async () => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "complaints/list",
  });
};

export const caseDetailApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "complaints/detail",
    params: { complaint_id: data },
  });
};

export const caseReplyApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "complaints/comment",
    data,
  });
};
