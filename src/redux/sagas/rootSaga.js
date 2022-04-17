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
import { handleAddRole, handleRoleListing } from "./handlers/KunjiRole/AddRole";
import {
  handleUserCreation,
  handleUserDepartment,
} from "./handlers/KunjiRole/UserCreation";
import {
  handleAddDepartment,
  handleDepartmentListing,
  handleDepartmentStatus,
} from "./handlers/Department/Kunji/department";

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
  yield takeLatest(actionTypes.USER_DEPARTMENT, handleUserDepartment);
  yield takeLatest(actionTypes.USER_CREATION, handleUserCreation);
  yield takeLatest(actionTypes.ADD_DEPARTMENT, handleAddDepartment);
  yield takeLatest(actionTypes.DEPARTMENT_LISTING, handleDepartmentListing);
  yield takeLatest(actionTypes.DEPARTMENT_STATUS,handleDepartmentStatus);
}
