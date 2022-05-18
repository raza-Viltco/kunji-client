import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

const state = getFromPersistance("kunji_auth_data");

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

export const editAssetApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/edit-society-assets",
    params: { id: data },
  });
};

export const updateAssetApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "society/update-society-assets",
    data,
  });
};

export const removeAssetApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "society/delete-society-asset",
    data,
  });
};
