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

export const setAssetId = (payload) => ({
  type: actionTypes.SET_ASSET_ID,
  payload,
});

export const editAsset = (payload) => ({
  type: actionTypes.EDIT_ASSET,
  payload,
});

export const setEditAsset = (payload) => ({
  type: actionTypes.SET_EDIT_ASSET,
  payload,
});
