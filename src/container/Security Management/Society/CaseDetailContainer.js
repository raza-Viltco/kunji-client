import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import {
  complaintDetail,
  complaintReply,
} from "../../../redux/actions/SecurityManagement/Society/Complaints";
import { userDepartment } from "../../../redux/actions/KunjiRole/UserCreation";

const caseDetailContainer = (CaseDetail) => () => {
  const dispatch = useDispatch();
  const stateLoading = useSelector((state) => state.local.isLoading);
  const caseId = useSelector((state) => state?.cases?.complaintId);
  const caseDetail = useSelector((state) => state?.cases?.complaintDetail);
  const userCreationData = useSelector((state) => state.userDepartment.data);
  const departmentsDetail = userCreationData?.data?.departments;

  const initialValues = {
    comment: "",
  };

  const validationSchema = Yup.object().shape({
    comment: Yup.string().required("Reply field is required!"),
  });

  const handleComplaintReply = (values, formikActions) => {
    dispatch(complaintReply({ values, caseId, formikActions }));
  };

  useEffect(() => {
    if (caseId) {
      dispatch(complaintDetail(caseId));
    }
  }, [caseId]);

  useEffect(() => {
    dispatch(userDepartment());
  }, []);

  return (
    <CaseDetail
      caseDetail={caseDetail}
      departmentsDetail={departmentsDetail}
      initialValues={initialValues}
      validationSchema={validationSchema}
      stateLoading={stateLoading}
      handleComplaintReply={handleComplaintReply}
    />
  );
};

export default caseDetailContainer;
