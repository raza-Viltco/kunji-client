import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { chargesList } from "../../redux/actions/SocietyAdministration/ChargesList";
import {
  billList,
  generateBill,
  selectResident,
} from "../../redux/actions/SocietyAdministration/GenerateBill";

const generateBillContainer = (GenerateBillForm) => () => {
  const dispatch = useDispatch();

  const initialValues = {
    resident_id: "",
    selected_charges_id: "",
    due_date: "",
  };

  const selectResidentData = useSelector(
    (state) => state.generateBill.residentData
  );

  const selectChargesData = useSelector(
    (state) => state.chargesList.chargesData
  );

  const billListData = useSelector((state) => state.generateBill.billList);
  console.log(billListData, "billlistdata");

  useEffect(() => {
    dispatch(selectResident());
  }, []);

  useEffect(() => {
    dispatch(chargesList());
  }, []);

  useEffect(() => {
    dispatch(billList());
  }, []);

  const validationSchema = Yup.object().shape({
    resident_id: Yup.string().required("Resident is required"),
    selected_charges_id: Yup.string().required("Charges are requied"),
    due_date: Yup.string().required("Due date is required"),
  });

  const handleGenerateBill = (values, formikActions) => {
    console.log("handle generate bill Button is clicked");
    dispatch(generateBill({ values, formikActions }));
  };

  return (
    <GenerateBillForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      selectResidentData={selectResidentData}
      selectChargesData={selectChargesData}
      billListData={billListData}
      handleGenerateBill={handleGenerateBill}
    />
  );
};
export default generateBillContainer;
