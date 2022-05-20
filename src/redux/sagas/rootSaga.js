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
import {
  handleAddAsset,
  handleAssetList,
  handleAssetEdit,
  handleUpdateAsset,
  handleRemoveAsset,
} from "./handlers/Asset/AddAsset";
import { handleFacilityList } from "./handlers/Facilities/AddFacilities";
import {
  handleAddRole,
  handleRoleListing,
  handlePermissions,
} from "./handlers/KunjiRole/AddRole";
import {
  handleStaffList,
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
import {
  handleApproveProperty,
  handleAssignDepartmentData,
  handleOwnerData,
  handleOwnership,
  handleOwnershipList,
  handlePropertyList,
} from "./handlers/AssignOwnership/Vertical/assignOwnership";
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
import {
  handleCreatePoll,
  handlePollList,
  handleViewPoll,
} from "./handlers/Poll/Poll";
import { handleVisitorList } from "./handlers/SecurityManagement/Society/VisitorList";
import {
  handleDeliveryList,
  handleNotifyResident,
} from "./handlers/SecurityManagement/Society/DeliveryList";
import { handleAddCharges } from "./handlers/SocietyAdministration/AddCharges";
import { handleChargesList } from "./handlers/SocietyAdministration/ChargesList";
import {
  handleBillList,
  handleGenerateBill,
  handleSelectResident,
} from "./handlers/SocietyAdministration/GenerateBill";
import {
  handleSocietyStatus,
  handleViewSociety,
} from "./handlers/Society/ViewSociety";
import { handleCreateNotice } from "./handlers/Notice/Notice";

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
  yield takeLatest(actionTypes.POLL_LIST, handlePollList);
  yield takeLatest(actionTypes.CREATE_POLL, handleCreatePoll);
  yield takeLatest(actionTypes.VIEW_POLL, handleViewPoll);
  yield takeLatest(actionTypes.PROPERTY_LIST, handlePropertyList);
  yield takeLatest(actionTypes.OWNER_DATA, handleOwnerData);
  yield takeLatest(actionTypes.ASSIGN_OWNERSHIP, handleOwnership);
  yield takeLatest(actionTypes.VISITOR_LIST, handleVisitorList);
  yield takeLatest(actionTypes.DELIVERY_LIST, handleDeliveryList);
  yield takeLatest(actionTypes.ADD_CHARGES, handleAddCharges);
  yield takeLatest(actionTypes.CHARGES_LIST, handleChargesList);
  yield takeLatest(actionTypes.SELECT_RESIDENT, handleSelectResident);
  yield takeLatest(actionTypes.GENERATE_BILL, handleGenerateBill);
  yield takeLatest(actionTypes.EDIT_ASSET, handleAssetEdit);
  yield takeLatest(actionTypes.BILL_LIST, handleBillList);
  yield takeLatest(actionTypes.UPDATE_ASSET, handleUpdateAsset);
  yield takeLatest(actionTypes.REMOVE_ASSET, handleRemoveAsset);
  yield takeLatest(actionTypes.VIEW_SOCIETY, handleViewSociety);
  yield takeLatest(actionTypes.SOCIETY_STATUS, handleSocietyStatus);
  yield takeLatest(actionTypes.STAFF_LIST, handleStaffList);
  yield takeLatest(actionTypes.CREATE_NOTICE, handleCreateNotice);
  yield takeLatest(actionTypes.OWNERSHIP_LIST, handleOwnershipList);
  yield takeLatest(actionTypes.APPROVE_PROPERTY, handleApproveProperty);
  yield takeLatest(actionTypes.NOTIFY_RESIDENT, handleNotifyResident);
}
