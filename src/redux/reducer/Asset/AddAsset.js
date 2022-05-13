import { actionTypes } from "../../actions/action-types";

const initialState = {
  assetData: null,
  assetListing: [],
  assetId: null,
  editAsset: null,
};

const addAssetReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_ASSETS:
      return { ...state, assetData: payload };
    case actionTypes.SET_ASSET_LIST:
      return { ...state, assetListing: payload };
    case actionTypes.SET_ASSET_ID:
      return { ...state, assetId: payload };
    case actionTypes.SET_EDIT_ASSET:
      return { ...state, editAsset: payload };
    default:
      return state;
  }
};

export default addAssetReducer;
