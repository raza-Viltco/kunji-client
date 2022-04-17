import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addDepartment } from "../../../redux/actions/Department/Kunji/department";

const departmentContainer = (DepartmentForm) => () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    code: "",
    // status: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Department is required"),
    code: Yup.string().required("Department code is required"),
  });

  const addDepartmentHandler = (values, formikActions) => {
    dispatch(addDepartment({ values, formikActions }));
  };

  return (
    <DepartmentForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      addDepartmentHandler={addDepartmentHandler}
    />
  );
};

export default departmentContainer;
