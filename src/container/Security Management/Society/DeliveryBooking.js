import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliveryList } from "../../../redux/actions/SecurityManagement/Society/DeliveryList";

const deliveryBookingContainer = (DeliveryList) => () => {
  const dispatch = useDispatch();

  const stateLoading = useSelector((state) => state.local.isLoading);
  const deliveryListData = useSelector(
    (state) => state.deliveryList.deliveryData
  );
  // console.log(deliveryListData, "deliveryListData"); 

  useEffect(() => {
    dispatch(deliveryList());
  }, []);

  return (
    <DeliveryList
      deliveryListData={deliveryListData}
      stateLoading={stateLoading}
    />
  );
};
export default deliveryBookingContainer;
