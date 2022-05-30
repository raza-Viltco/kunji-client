import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewBill } from "../../redux/actions/SocietyAdministration/ViewBill";

const viewBillContainer = (ViewBillData) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);
  const viewBillList = useSelector((state) => state.viewBill.viewBillData);

  useEffect(() => {
    dispatch(viewBill());
  }, []);
  return <ViewBillData viewBillList={viewBillList}  stateLoading={stateLoading}/>;
};
export default viewBillContainer;
