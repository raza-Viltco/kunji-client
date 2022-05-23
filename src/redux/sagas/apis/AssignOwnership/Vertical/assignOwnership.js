import API from "../../../../../utils/httpClient";
import { getFromPersistance } from "../../../../../utils/functions";


export const assignAppartmentDataApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  const { id } = state.data.society;
  console.log(id, "id");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "society/mapping-three",
    params: { society_id: id, mapping_two_id: data },
  });
};

export const propertyListApi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "property/approve-list",
  });
};

export const ownerDataApi = async (data) => {
  const { mappingId, appartmentFloor, appartmentId } = data;
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "property/landlord",
    params: {
      mapping_level_one: mappingId,
      mapping_level_two: appartmentFloor,
      mapping_level_three: appartmentId,
    },
  });
};

export const assignOwnershipApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "property/add",
    data,
  });
};

export const ownershipListApi = async () => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "property/list",
  });
};

export const approvePropertyApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "property/approve",
    data,
  });
};
