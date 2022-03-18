import React, { useState } from "react";
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../../../../components/Modal";
import Button from "../../../../components/Button";
import societyListingContainer from "../../../../container/Society/SocietyListingContainer";
import { setSocietyEditId } from "../../../../redux/actions/Society/SocietyListing";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

const SocietyListing = ({ societiesList }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = (id) => {
    setOpen((prev) => !prev);
    console.log(id);
    dispatch(setSocietyEditId(id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Society Name", width: 180 },
    {
      field: "country_id",
      headerName: "Country",
      width: 180,
    },
    {
      field: "city_id",
      headerName: "City",
      width: 180,
    },
    {
      field: "zip_code",
      headerName: "Zipcode",
      width: 180,
    },
    {
      field: "status",
      headerName: "Status",
      width: 180,
      valueGetter: ({ value }) => (value === 1 ? "Active" : "Inactive"),
    },
    {
      field: "actions",
      type: "actions",
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<AiFillDelete size={20} />}
          label="Delete"
        />,
        <GridActionsCellItem
          icon={<AiFillEdit size={20} />}
          label="Edit"
          onClick={() => handleClickOpen(params.id)}
        />,
      ],
    },
  ];

  return (
    <>
      <div style={{ height: "100vh", width: "100%", background: "white" }}>
        <DataGrid
          rows={societiesList}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // checkboxSelection
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div>

      <Modal
        open={open}
        title="Edit Society"
        cancelButton={
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            size="small"
            click={handleClickOpen}
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
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Modal>
    </>
  );
};

export default societyListingContainer(SocietyListing);
