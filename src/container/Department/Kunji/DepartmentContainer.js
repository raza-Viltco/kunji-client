import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { addDepartment } from "../../../redux/actions/Department/Kunji/department";

const departmentContainer = (DepartmentForm) => () => {
  const dispatch = useDispatch();

  const initialValues = {
    code: "",
    departName: "",
  };

  const validationSchema = Yup.object().shape({
    code: Yup.string().required("Department code is require"),
    departName: Yup.string().required("Department is require"),
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
