import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";
const state = getFromPersistance("kunji_auth_data");

export const createNoticeApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "user-notice/create-user-notices",
    data,
  });
};
