import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

export const userDepartmentApi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/view-active-departments",
  });
};

export const userCreationApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "society-admin/user/add",
    data,
  });
};
