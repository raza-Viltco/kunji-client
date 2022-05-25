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
import societyConfigReducer from "./reducer/SocietyConfiguation/SocietyConfig";
import userApprovalReducer from "./reducer/KunjiRole/UserApproval";
import assignOwnershipReducer from "./reducer/AssignOwnership/Vertical/assignOwnership";
import societyProfileReducer from "./reducer/Society/SocietyProfile";
import servantApprovalReducer from "./reducer/SecurityManagement/Society/ServantApproval";
import complaintCasesReducer from "./reducer/SecurityManagement/Society/Complaints";
import pollReducer from "./reducer/Poll/Poll";
import visitorListReducer from "./reducer/SecurityManagement/Society/VisitorList";
import deliveryListReducer from "./reducer/SecurityManagement/Society/DeliveryList";
import ChargesListReducer from "./reducer/SocietyAdministration/ChargesList";
import generateBillReducer from "./reducer/SocietyAdministration/GenerateBill";
import viewSocietyReducer from "./reducer/Society/ViewSociety";
import panicAlertReducer from "./reducer/SecurityManagement/Society/PanicAlert";

const reducers = (history) =>
  combineReducers({
    local: localReducer,
    user: userReducer,
    otp: otpReducer,
    password: passwordReducer,
    addSociety: addSocietyReducer,
    societyListing: societyListReducer,
    societyProfile: societyProfileReducer,
    profile: profileReducer,
    asset: addAssetReducer,
    facility: addFacilityReducer,
    kunjiRole: kunjiRoleReducer,
    userDepartment: userDepartmentReducer,
    userDepart: departmentListingReducer,
    societyConfig: societyConfigReducer,
    userApproval: userApprovalReducer,
    assignOwnership: assignOwnershipReducer,
    servantApproval: servantApprovalReducer,
    poll: pollReducer,
    cases: complaintCasesReducer,
    visitorList: visitorListReducer,
    deliveryList: deliveryListReducer,
    chargesList: ChargesListReducer,
    generateBill: generateBillReducer,
    viewSociety: viewSocietyReducer,
    panicAlert: panicAlertReducer,
    router: connectRouter(history),
  });

export default reducers;
