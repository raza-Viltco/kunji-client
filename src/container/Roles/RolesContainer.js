import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewRoles } from "../../redux/actions/Roles/roles";

const rolesContainer = (Roles) => () => {
  const dispatch = useDispatch();

  const rolesList = useSelector((state) => state.viewRoles);

  const initialValues = {
    name: "",
  };

  useEffect(() => {
    dispatch(viewRoles());
  }, []);

  return (
    <>
      <Roles rolesList={rolesList} />
    </>
  );
};
export default rolesContainer;
