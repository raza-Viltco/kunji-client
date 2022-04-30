import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

const state = getFromPersistance("kunji_auth_data");

export const pollListApi = async () => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "poll/get-poll-questions",
  });
};

export const createPollApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "poll/create-poll",
    data,
  });
};

export const viewPollApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "poll/results",
    params: { poll_id: data },
  });
};
