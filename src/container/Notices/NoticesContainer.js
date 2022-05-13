import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectResident } from "../../redux/actions/SocietyAdministration/GenerateBill";

const noticesContainer = (NoticeForm) => () => {
  const dispatch = useDispatch();
  const selectResidentData = useSelector(
    (state) => state.generateBill.residentData
  );
  console.log("selectResidentData", selectResidentData);
  const setResidentDrop = useSelector(
    (state) => state.generateBill.residentDrop
  );
  console.log(setResidentDrop, "setResidentDrop");

  const residentOptionFunction = () => {
    const residentsOption = [];
    for (let i = 0; i < selectResidentData.length; i++) {
      const Obj = { value: "", label: "" };
      const newData = selectResidentData[i].resedent;
      Obj.value = newData.id;
      Obj.label = newData.name;
      residentsOption.push(Obj);
    }
    return residentsOption;
  };

  const initialValues = {
    residents: [],
  };

  console.log(residentOptionFunction(), "residentOptionFunction");

  useEffect(() => {
    residentOptionFunction();
  }, [selectResidentData]);

  useEffect(() => {
    dispatch(selectResident());
  }, []);

  return (
    <NoticeForm
      initialValues={initialValues}
      selectResidentData={selectResidentData}
      setResidentDrop={residentOptionFunction()}
    />
  );
};
export default noticesContainer;
