import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";

export const getCountriesApi = async () => {
  return API.request({
    method: "GET",
    url: "country-data",
    params: { countries_list_only: true },
  });
};

export const getCitiesApi = async (data) => {
  return API.request({
    method: "GET",
    url: "country-data",
    params: { countries_list_only: false, country_id: data },
  });
};

export const addSocietyApi = async (data) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "POST",
    url: "society/add",
    data,
  });
};
