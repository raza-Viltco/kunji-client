import React, { useState } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import Stack from '@mui/material/Stack';
import "./Table.css";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

function NoRowsOverlay() {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      No data found
    </Stack>
  );
}

const Table = ({ rows, columns, checkboxSelection, loading }) => {
  const [pageSize, setPageSize] = useState(10);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      pagination
      rowsPerPageOptions={[10, 15, 20]}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      checkboxSelection={checkboxSelection}
      loading={loading}
      components={{
        Toolbar: CustomToolbar,
        NoRowsOverlay
      }}
    />
  );
};

export default Table;
