import React from "react";
import Switch from "@mui/material/Switch";

import Button from "../../../../../components/Button";
import roleDetailContainer from "../../../../../container/KunjiRole/RoleDetailContainer";

const RoleDetail = ({
  permissionList,
  updatePermissions,
  roleEdit,
  stateLoading,
  handleCheckPermissions,
  handleUpdatePermissions,
}) => {
  return (
    <>
      {roleEdit === true ? (
        <>
          <div className="row">
            {Object?.entries(permissionList)?.map(([item, value], index) => {
              return (
                <div className="col-sm-4" key={index}>
                  <div className="col-sm-12 mt-3 cardheight1 pl-2 pr-2 pt-0">
                    <div className="row background-color-header">
                      <div className="col-sm-6 m-auto pt-2 ">
                        <h6>
                          <b className="paddingcard ">{item}</b>
                        </h6>
                      </div>
                      <div className="col-sm-6">
                        <div className="row">
                          {/* <div className="col-sm-6 m-auto pt-2">
        <h6>
          <b>Select All</b>
        </h6>
      </div>
      <div className="col-sm-6   text-end">
        <Switch />
      </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 cardheight pl-2 pr-2 pt-0">
                    <div className="row background-color-header1">
                      {value?.map((el, index) => {
                        return (
                          <div className="row" key={index}>
                            <div className="col-sm-6">
                              <h6 className="paddingcard1">{el?.name}</h6>
                            </div>
                            <div className="col-sm-6">
                              <div className="col-sm-12 text-end">
                                <Switch
                                  onChange={handleCheckPermissions}
                                  value={el?.id}
                                  checked={updatePermissions?.includes(el?.id)}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <div className="col-sm-12">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  isLoading={stateLoading}
                  size="small"
                  click={handleUpdatePermissions}
                >
                  Update
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        " "
      )}
    </>
  );
};

export default roleDetailContainer(RoleDetail);
