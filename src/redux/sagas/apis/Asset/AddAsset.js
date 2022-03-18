import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

export const addAssetApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "society/add-assets",
    data,
  });
};

export const getAssetApi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/get-assets-facilities",
  });
};
