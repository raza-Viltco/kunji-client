import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

const state = getFromPersistance("kunji_auth_data");

export const selectResidentApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "charges-type/select-resident",
  });
};

export const generateBillApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "charges-type/society-bill",
    data,
  });
};


export const billListApi = async (data) => {
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "charges-type/get-society-bill-list",
  });
};