import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { userDepartment } from "../../redux/actions/KunjiRole/UserCreation";
import { userCreation } from "../../redux/actions/KunjiRole/UserCreation";

const userCreationContainer = (UserCreationForm) => () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userDepartment());
  }, []);

  const userCreationData = useSelector((state) => state.userDepartment.data);
  // console.log("departmentData", userCreationData.data.departments);
  const departmentsDetail = userCreationData?.data?.departments;
  // console.log(departmentsDetail,"departmentsDetail")
  const rolesDetail = userCreationData?.data?.roles;
  // console.log(rolesDetail);

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    mobile: "",
    cnic: "",
    department_id: "",
    role_id: "",
  };

  const validationSchema = Yup.object().shape({
    first_name: Yup.string()
      .required("First name  is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for first name "),
    last_name: Yup.string()
      .required("Last name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for last name "),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
    mobile: Yup.string()
      .required("Mobile no  is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    cnic: Yup.string().required("Cnic is required"),
    department_id: Yup.string().required("Department is required"),
    role_id: Yup.string().required("Role is required"),
  });

  const userCreationHandler = (values, formikActions) => {
    // console.log("user creation handler",values);
    dispatch(userCreation({ values, formikActions }));
  };

  return (
    <UserCreationForm
      departmentsDetail={departmentsDetail}
      rolesDetail={rolesDetail}
      initialValues={initialValues}
      validationSchema={validationSchema}
      userCreationHandler={userCreationHandler}
    />
  );
};
export default userCreationContainer;
