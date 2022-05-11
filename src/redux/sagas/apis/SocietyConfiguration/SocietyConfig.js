import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

export const addBuildingApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "society-admin/mapping/level-one",
    data,
  });
};

export const getBuildingApi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  const { id } = state.data.society;
  console.log(id);
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/mapping-one",
    params: { society_id: id },
  });
};

export const getFloorApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  const { id } = state.data.society;
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/mapping-two",
    params: { society_id: id, mapping_one_id: data },
  });
};

export const areaMappingApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "society-admin/mapping/add-two",
    data,
  });
};

export const apartmentListApi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/full-map",
  });
};
