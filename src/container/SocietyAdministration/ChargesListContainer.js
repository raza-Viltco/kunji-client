import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { chargesList } from "../../redux/actions/SocietyAdministration/ChargesList";

const chargesListContainer = (ChargesList) => () => {
  const dispatch = useDispatch();

  const stateLoading = (state) => state.local.isLoading;
  const chargesListData = useSelector((state) => state.chargesList.chargesData);

  console.log(chargesListData)

  useEffect(() => {
    dispatch(chargesList());
  }, []);

  return (
    <ChargesList
      chargesListData={chargesListData}
      stateLoading={stateLoading}
    />
  );
};
export default chargesListContainer;
