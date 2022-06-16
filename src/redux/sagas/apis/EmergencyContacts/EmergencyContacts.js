import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

export const emergencyContactsApi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society-admin/emergency-contacts",
  });
};

export const createContactsApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "society-admin/update-emergency-contacts",
    data,
  });
};
