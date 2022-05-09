import API from "../../../../../utils/httpClient";
import { getFromPersistance } from "../../../../../utils/functions";

const state = getFromPersistance("kunji_auth_data");

export const assignAppartmentDataApi = async (data) => {
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
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "property/list",
  });
};

export const ownerDataApi = async (data) => {
  const { mappingId, appartmentFloor, appartmentId } = data;
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
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "property/add",
    data,
  });
};
