import API from "../../../../utils/httpClient";
import { getFromPersistance } from "../../../../utils/functions";



export const viewProfileApi = async (profileData) => {
  const state = getFromPersistance("kunji_auth_data");
  return API.request({
    headers: { Authorization: `Bearer ${state.data.token}` },
    method: "GET",
    url: "user/view-mobile-profile",
    profileData,
  });
};
