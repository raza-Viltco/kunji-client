import React, { useState } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
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
      }}
    />
  );
};

export default Table;
