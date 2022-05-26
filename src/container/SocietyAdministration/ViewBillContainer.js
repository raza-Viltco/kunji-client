import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewBill } from "../../redux/actions/SocietyAdministration/ViewBill";

const viewBillContainer = (ViewBillData) => () => {
  const dispatch = useDispatch();

  const viewBillList = useSelector((state) => state.viewBill.viewBillData);
  console.log(viewBillList, "viewBillList");
  useEffect(() => {
    dispatch(viewBill());
  }, []);
  return <ViewBillData viewBillList={viewBillList} />;
};
export default viewBillContainer;
