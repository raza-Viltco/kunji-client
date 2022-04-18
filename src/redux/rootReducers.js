import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import userReducer from "./reducer/Auth/user";
import localReducer from "./reducer/local";
import otpReducer from "./reducer/Auth/otp";
import passwordReducer from "./reducer/Auth/password";
import addSocietyReducer from "./reducer/Society/AddSociety";
import societyListReducer from "./reducer/Society/SocietyListing";
import profileReducer from "./reducer/Profile/profile";
import addAssetReducer from "./reducer/Asset/AddAsset";
import addFacilityReducer from "./reducer/Facilities/AddFacilities";
import kunjiRoleReducer from "./reducer/KunjiRole/KunjiRole";
import userDepartmentReducer from "./reducer/KunjiRole/UserCreation";
import departmentListingReducer from "./reducer/Department/Kunji/department";
import userApprovalReducer from "./reducer/KunjiRole/UserApproval";

const reducers = (history) =>
  combineReducers({
    local: localReducer,
    user: userReducer,
    otp: otpReducer,
    password: passwordReducer,
    addSociety: addSocietyReducer,
    societyListing: societyListReducer,
    profile: profileReducer,
    asset: addAssetReducer,
    facility: addFacilityReducer,
    kunjiRole: kunjiRoleReducer,
    userDepartment: userDepartmentReducer,
    userDepart: departmentListingReducer,
    userApproval: userApprovalReducer,
    router: connectRouter(history),
  });

export default reducers;
