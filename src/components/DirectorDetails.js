import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const rows = [{ id: 1, col1: "Hello", col2: "World", col3: "4.4" }];

const columns = [
  { field: "col1", headerName: "Client Name", width: 300 },
  { field: "col2", headerName: "Relation", width: 200 },
  { field: "col3", headerName: "Share(%)", width: 100 },
];

export default function App() {
  return (
    <div
      style={{
        height: 300,
        width: "100%",
        background: "#ffffff",
        alignItems: "center",
      }}
    >
      <fieldset>
        <legend>Personal Details</legend>
        <DataGrid
          rows={rows}
          columns={columns}
        />
      </fieldset>
    </div>
  );
}
