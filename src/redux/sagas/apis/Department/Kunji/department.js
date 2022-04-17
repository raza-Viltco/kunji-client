import API from "../../../../../utils/httpClient";
import { getFromPersistance } from "../../../../../utils/functions";

export const addDepartmentApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "society/add-departments",
    data,
  });
};

export const departmentListingApi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/view-departments",
  });
};

export const departmentStatusApi = async (data) => {
  console.log(data,"here");
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "society/update-department-status",
    data,
  });
};
