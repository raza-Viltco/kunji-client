import React, { useState } from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";

import Dialog from "../../../../components/Modal";
import Table from "../../../../components/Table";
import Input from "../../../../components/Form/Input";
import Button from "../../../../components/Button";
import InputError from "../../../../components/Form/InputError";
import assetListingContainer from "../../../../container/SocietyAssets/AssetListingContainer";
import { setAssetId } from "../../../../redux/actions/Asset/AddAsset";

const AssetListing = ({
  assetListing,
  stateLoading,
  initialValues,
  validationSchema,
  editData,
  updateAssetHandler,
}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleAssetModal = (id) => {
    // console.log(id);
    dispatch(setAssetId(id));
    setShow(true);
  };

  const handleModalClose = () => setShow(false);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "code", headerName: "Code" },
    { field: "name", headerName: "Name" },
    { field: "location", headerName: "Location" },
    { field: "quantity", headerName: "Quantity" },
    {
      field: "status",
      headerName: "Status",
      width: 180,
      valueGetter: ({ value }) => (value === 1 ? "Active" : "Inactive"),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 200,
      getActions: (params) => [
        <div>
          <button
            className="btn btn-primary btn-sm "
            onClick={() => handleAssetModal(params.id)}
          >
            Edit
          </button>
          &nbsp;
          <button className="btn btn-danger btn-sm ">Delete</button>
        </div>,
      ],
    },
  ];

  return (
    <>
      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table rows={assetListing} columns={columns} loading={stateLoading} />
      </div>

      <Dialog
        title="Update Asset"
        open={show}
        close={handleModalClose}
        className="modalstyle"
      >
        <Formik
          initialValues={editData ? editData : initialValues}
          validationSchema={validationSchema}
          onSubmit={updateAssetHandler}
        >
          {(props) => (
            <Form>
              {console.log(props)}
              <div className="row">
                <div className="col-md-6 mt-3">
                  <Input
                    placeholder="Code"
                    name="code"
                    type="text"
                    value={props.values.code}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    className={
                      props.errors.code && props.touched.code
                        ? "input-outline"
                        : "bootstyle"
                    }
                  />
                  {props.touched.code && props.errors.code && (
                    <InputError>{props.errors.code}</InputError>
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <Input
                    placeholder="Name"
                    name="name"
                    type="text"
                    value={props.values.name}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    className={
                      props.errors.name && props.touched.name
                        ? "input-outline"
                        : "bootstyle"
                    }
                  />
                  {props.touched.name && props.errors.name && (
                    <InputError>{props.errors.name}</InputError>
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <Input
                    placeholder="Quantity"
                    name="quantity"
                    type="text"
                    value={props.values.quantity}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    className={
                      props.errors.quantity && props.touched.quantity
                        ? "input-outline"
                        : "bootstyle"
                    }
                  />
                  {props.touched.quantity && props.errors.quantity && (
                    <InputError>{props.errors.quantity}</InputError>
                  )}
                </div>
                <div className="col-md-6 mt-3">
                  <Input
                    placeholder="Location"
                    name="location"
                    type="text"
                    value={props.values.location}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    className={
                      props.errors.location && props.touched.location
                        ? "input-outline"
                        : "bootstyle"
                    }
                  />
                  {props.touched.location && props.errors.location && (
                    <InputError>{props.errors.location}</InputError>
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: 20 }}
                  // isLoading={stateLoading}
                  size="small"
                >
                  Update Asset
                </Button>
                &nbsp;
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    borderRadius: 20,
                    background: "#0d6efd !important",
                  }}
                  click={handleModalClose}
                  size="small"
                >
                  Close
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};
export default assetListingContainer(AssetListing);
