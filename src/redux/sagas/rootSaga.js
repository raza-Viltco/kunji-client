import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "../actions/action-types";
import {
  handleLogin,
  handleRegister,
  handlerLogout,
} from "./handlers/Auth/user";
import {
  handleForgotPassword,
  handleRecoverPassword,
  handleUpdatePassword,
} from "./handlers/Auth/password";
import {
  handleForgotPasswordOtp,
  handleRegisterOtp,
  handleResendRegisterOtp,
} from "./handlers/Auth/otp";
import {
  handleCountries,
  handleCities,
  handleAddSociety,
} from "./handlers/Society/AddSociety";
import {
  handleSocieties,
  handleEditSociety,
} from "./handlers/Society/SocietyListing";
import {
  viewProfileData,
  handleUpdateProfile,
} from "./handlers/Profile/profile";
import { handleAddAsset, handleAssetList } from "./handlers/Asset/AddAsset";
import { handleFacilityList } from "./handlers/Facilities/AddFacilities";
import {
  handleAddRole,
  handleRoleListing,
  handlePermissions,
} from "./handlers/KunjiRole/AddRole";
import {
  handleUserCreation,
  handleUserDepartment,
} from "./handlers/KunjiRole/UserCreation";
import {
  handleBuilding,
  handleHorizontalBuilding,
  handleBuildingData,
  handleFloorData,
  handleAreaMapping,
  handleVerticalMapping,
  handleAppartmentList,
} from "./handlers/SocietyConfiguration/SocietyConfig";
import {
  handleAddDepartment,
  handleDepartmentListing,
  handleDepartmentStatus,
} from "./handlers/Department/Kunji/department";
import {
  handleApprovalListing,
  handlerUserApproval,
  handleUserApproval,
} from "./handlers/KunjiRole/UserApproval";
import { handleAssignDepartmentData } from "./handlers/AssignOwnership/Vertical/assignOwnership";
import { handleSocietyProfile } from "./handlers/Society/SocietyProfile";
import {
  handleServantApproval,
  handleServantApprove,
  handleGatePassApproval,
  handleGatePassRequest,
} from "./handlers/SecurityManagement/Society/servantApproval";
import {
  handleCases,
  handleCaseDetail,
  handleCaseReply,
} from "./handlers/SecurityManagement/Society/Complaints";

export function* watcherSaga() {
  yield takeLatest(actionTypes.LOGIN, handleLogin);
  yield takeLatest(actionTypes.LOGOUT, handlerLogout);
  yield takeLatest(actionTypes.REGISTER, handleRegister);
  yield takeLatest(actionTypes.REGISTER_OTP, handleRegisterOtp);
  yield takeLatest(actionTypes.RESEND_REGISTER_OTP, handleResendRegisterOtp);
  yield takeLatest(actionTypes.FORGOT_PASSWORD, handleForgotPassword);
  yield takeLatest(actionTypes.FORGOT_PASSWORD_OTP, handleForgotPasswordOtp);
  yield takeLatest(actionTypes.RECOVER_PASSWORD, handleRecoverPassword);
  yield takeLatest(actionTypes.COUNTRIES_DATA, handleCountries);
  yield takeLatest(actionTypes.CITY_DATA, handleCities);
  yield takeLatest(actionTypes.SOCIETY_LIST, handleSocieties);
  yield takeLatest(actionTypes.ADD_SOCIETY, handleAddSociety);
  yield takeLatest(actionTypes.UPDATE_PASSWORD, handleUpdatePassword);
  yield takeLatest(actionTypes.VIEW_PROFILE, viewProfileData);
  yield takeLatest(actionTypes.ASSETS, handleAddAsset);
  yield takeLatest(actionTypes.ASSET_LIST, handleAssetList);
  yield takeLatest(actionTypes.FACILITIES_LIST, handleFacilityList);
  yield takeLatest(actionTypes.PROFILE_UPDATE, handleUpdateProfile);
  yield takeLatest(actionTypes.EDIT_SOCIETY_LIST, handleEditSociety);
  yield takeLatest(actionTypes.KUNJI_ROLE, handleAddRole);
  yield takeLatest(actionTypes.KUNJI_ROLE_LISTING, handleRoleListing);
  yield takeLatest(actionTypes.VERTICAL_BUILDING, handleBuilding);
  yield takeLatest(actionTypes.HORIZONTAL_BUILDING, handleHorizontalBuilding);
  yield takeLatest(actionTypes.BUILDING_DATA, handleBuildingData);
  yield takeLatest(actionTypes.USER_DEPARTMENT, handleUserDepartment);
  yield takeLatest(actionTypes.USER_CREATION, handleUserCreation);
  yield takeLatest(actionTypes.ADD_DEPARTMENT, handleAddDepartment);
  yield takeLatest(actionTypes.DEPARTMENT_LISTING, handleDepartmentListing);
  yield takeLatest(actionTypes.DEPARTMENT_STATUS, handleDepartmentStatus);
  yield takeLatest(actionTypes.ASSIGN_PERMISSION, handlePermissions);
  yield takeLatest(actionTypes.FLOOR_DATA, handleFloorData);
  yield takeLatest(actionTypes.AREA_MAPPING, handleAreaMapping);
  yield takeLatest(actionTypes.VERTICAL_MAPPING, handleVerticalMapping);
  yield takeLatest(actionTypes.APPROVAL_LISTING, handleApprovalListing);
  yield takeLatest(
    actionTypes.ASSIGN_APPARTMENT_DATA,
    handleAssignDepartmentData
  );
  yield takeLatest(actionTypes.USER_APPROVAL, handleUserApproval);
  yield takeLatest(actionTypes.SOCIETY_PROFILE, handleSocietyProfile);
  yield takeLatest(actionTypes.SERVANT_APPROVAL_LIST, handleServantApproval);
  yield takeLatest(actionTypes.SERVANT_APPROVAL, handleServantApprove);
  yield takeLatest(actionTypes.GATE_APPROVE_LIST, handleGatePassApproval);
  yield takeLatest(actionTypes.APPARTMENT_LIST, handleAppartmentList);
  yield takeLatest(actionTypes.GATE_PASS_APPROVAL, handleGatePassRequest);
  yield takeLatest(actionTypes.COMPLAINT_CASES, handleCases);
  yield takeLatest(actionTypes.COMPLAINT_DETAIL, handleCaseDetail);
  yield takeLatest(actionTypes.COMPLAINT_REPLY, handleCaseReply);
}
