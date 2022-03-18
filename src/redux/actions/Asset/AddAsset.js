import { actionTypes } from "../action-types";

export const addAsset = (payload) => ({
  type: actionTypes.ASSETS,
  payload,
});

export const setAddAsset = (payload) => ({
  type: actionTypes.SET_ASSETS,
  payload,
});

export const assetListing = () => ({
  type: actionTypes.ASSET_LIST,
});

export const setAssetListing = (payload) => ({
  type: actionTypes.SET_ASSET_LIST,
  payload,
});
