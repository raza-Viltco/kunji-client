import { actionTypes } from "../../actions/action-types";

const initialState = {
  assetData: null,
  assetListing: [],
  // assetId: null,
  editAsset: null,
  updateAsset: null,
};

const addAssetReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_ASSETS:
      return { ...state, assetListing: [payload, ...state.assetListing] };
    case actionTypes.SET_ASSET_LIST:
      return { ...state, assetListing: payload };
    case actionTypes.SET_ASSET_ID:
      return { ...state, assetId: payload };
    case actionTypes.SET_EDIT_ASSET:
      return { ...state, editAsset: payload };
    case actionTypes.SET_UPDATE_ASSET:
      return { ...state, updateAsset: payload };
    case actionTypes.SET_REMOVE_ASSET:
      return {
        ...state,
        assetListing: state.assetListing.filter(
          (item) => item.id !== Number(payload.data)
        ),
      };
    default:
      return state;
  }
};

export default addAssetReducer;
