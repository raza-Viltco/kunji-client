import API from "../../../../utils/httpClient";

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
