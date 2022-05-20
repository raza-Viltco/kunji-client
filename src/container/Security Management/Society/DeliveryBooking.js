import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deliveryList,
  notifyResident,
} from "../../../redux/actions/SecurityManagement/Society/DeliveryList";

const deliveryBookingContainer = (DeliveryList) => () => {
  const dispatch = useDispatch();

  const stateLoading = useSelector((state) => state.local.isLoading);
  const deliveryListData = useSelector(
    (state) => state.deliveryList.deliveryData
  );

  useEffect(() => {
    dispatch(deliveryList());
  }, []);

  const handleNotify = (booking_id) => {
    dispatch(notifyResident({ booking_id }));
  };

  return (
    <DeliveryList
      deliveryListData={deliveryListData}
      stateLoading={stateLoading}
      handleNotify={handleNotify}
    />
  );
};
export default deliveryBookingContainer;
