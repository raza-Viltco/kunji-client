import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import userReducer from "./reducer/Auth/user";
import localReducer from "./reducer/local";
import otpReducer from "./reducer/Auth/otp";
import passwordReducer from "./reducer/Auth/password";
import addSocietyReducer from "./reducer/Society/AddSociety";
import societyListReducer from "./reducer/Society/SocietyListing";
import addAssetReducer from "./reducer/Asset/AddAsset";

const reducers = (history) =>
  combineReducers({
    local: localReducer,
    user: userReducer,
    otp: otpReducer,
    password: passwordReducer,
    addSociety: addSocietyReducer,
    societyListing: societyListReducer,
    asset: addAssetReducer,
    router: connectRouter(history),
  });

export default reducers;
