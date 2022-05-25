import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { panicAlert } from "../../../redux/actions/SecurityManagement/Society/PanicAlert";

const panicAlertContainer = (PanicAlertList) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(panicAlert());
  }, []);

  const stateLoading = useSelector((state) => state.local.isLoading);
  const alertValue = useSelector((state) => state.panicAlert.panicAlertData);
  console.log(alertValue, "alertValue");

  return <PanicAlertList stateLoading={stateLoading} alertValue={alertValue} />;
};
export default panicAlertContainer;
