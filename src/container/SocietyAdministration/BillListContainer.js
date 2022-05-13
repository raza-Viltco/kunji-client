import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { billList } from "../../redux/actions/SocietyAdministration/GenerateBill";

const billListContainer = (BillListing) => () => {
  const dispatch = useDispatch();

  const billListData = useSelector((state) => state.generateBill.billList);
  console.log(billListData, "billlistdata");
  useEffect(() => {
    dispatch(billList());
  }, []);
  return <BillListing billListData={billListData} />;
};
export default billListContainer;
