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
  // console.log(departmentsDetail)
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
    first_name: Yup.string().required("field  is required"),
    last_name: Yup.string().required("field  is required"),
    email: Yup.string().email().required("field is required"),
    password: Yup.string().required("field is required"),
    mobile: Yup.string().required("field  is required"),
    cnic: Yup.string().required("field is required"),
    department_id: Yup.string().required("field is required"),
    role_id: Yup.string().required("field is required"),
  });

  const userCreationHandler = (values,formikActions) => {
    // console.log("user creation handler",values);
    dispatch(userCreation({values,formikActions}));
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
