import React from "react";
import { Link } from "react-router-dom";

import Table from "../../../../components/Table";
import Button from "../../../../components/Button";
import societyListingContainer from "../../../../container/Society/SocietyListingContainer";
import "./societyList.css";

const SocietyListing = ({ societiesList }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Society Name", width: 180 },
    {
      field: "country",
      headerName: "Country",
      width: 120,
      valueGetter: (params) => params.row.country.name,
    },
    {
      field: "city",
      headerName: "City",
      width: 120,
      valueGetter: (params) => params.row.city.name,
    },
    {
      field: "zip_code",
      headerName: "Zipcode",
      width: 120,
    },
    {
      field: "society_type",
      headerName: "Type",
      width: 120,
      valueGetter: ({ value }) => (value === 1 ? "Horizontal" : "Vertical"),
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      valueGetter: ({ value }) => (value === 1 ? "Activated" : "Deactived"),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Action",
      width: 80,
      getActions: (params) => [
        <div className="society_view_btn">
          <Link to={`/society_listing_view/${params.id}`}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                borderRadius: 20,
                textTransform: "Capitalize",
              }}
              size="normal"
            >
              View
            </Button>
          </Link>
        </div>,
      ],
    },
  ];

  return (
    <>
      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <Table
          rows={societiesList}
          columns={columns}
          loading={!societiesList.length}
        />
      </div>

      {/* <Modal
        open={open}
        title="Edit Society"
        cancelButton={
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            size="small"
            click={handleClickClose}
          >
            Cancel
          </Button>
        }
        updateButton={
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            size="small"
          >
            Update
          </Button>
        }
      >
        <Formik initialValues={editData}>
          {(props) => (
            <Form>
              {console.log(props)}
              <div className="row">
                <div className="col-md-12">
                  <Input
                    margin="noraml"
                    fullWidth
                    label="Society Name"
                    name="name"
                    type="text"
                    value={props.values.name}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={props?.errors?.name}
                    helperText
                  />
                </div>
                <div className="col-md-12">
                  <Dropdown
                    inputLabel="Country"
                    name="country.id"
                    value={props?.values?.country?.id}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={props?.errors?.country_id}
                  >
                    <MenuItem value={editData?.country?.id}>
                      {editData?.country?.name}
                    </MenuItem>
                  </Dropdown>
                </div>
                <div className="col-md-12">
                  <Dropdown
                    inputLabel="City"
                    name="city_id"
                    value={props.values.city_id}
                    onChange={props.handleChange}
                    // onBlur={props.handleBlur}
                    // error={props?.errors?.city_id}
                  >
                    {editData?.cities?.map((item, index) => {
                      return (
                        <MenuItem value={item.id} key={index}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </Dropdown>
                </div>
                <div className="col-md-12">
                  <Input
                    margin="normal"
                    fullWidth
                    label="Zipcode"
                    name="zip_code"
                    type="text"
                    value={props.values.zip_code}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={props?.errors?.zip_code}
                    helperText
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Modal> */}
    </>
  );
};

export default societyListingContainer(SocietyListing);
