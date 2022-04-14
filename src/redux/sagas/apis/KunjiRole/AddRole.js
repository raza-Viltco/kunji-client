import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

export const addRoleApi = async (data) => {
  console.log(data);
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "user/create-role",
    data,
  });
};

export const roleListingApi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "user/roles-permissions",
  });
};

export const assignPermissionApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: {Authorization: `Bearer ${state.data.token}`},
    method: "POST",
    url: "user/assign_permission_to_roles",
    data
  })
}
