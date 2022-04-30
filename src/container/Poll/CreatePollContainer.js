import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPoll } from "../../redux/actions/Poll/Poll";

const createPollContainer = (CreatePool) => () => {
  const dispatch = useDispatch();

  const initialValues = {
    question: "",
    options: ["", "", ""],
    valid_days: "",
  };

  const createPollHandler = (values, formikActions) => {
    dispatch(createPoll({ values, formikActions }));
  };

  return (
    <CreatePool
      initialValues={initialValues}
      createPollHandler={createPollHandler}
    />
  );
};
export default createPollContainer;
