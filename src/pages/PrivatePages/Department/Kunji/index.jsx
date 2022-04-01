import React from "react";

import Card from "../../../../components/Card";
import DepartmentForm from "./department";
import DepartmentList from "./departmentList";

const AddKunjiDepartment = () => {
  return (
    <Card>
      <DepartmentForm />
      <DepartmentList />
    </Card>
  );
};
export default AddKunjiDepartment;
