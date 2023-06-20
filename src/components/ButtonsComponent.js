import { Button, Stack } from "@mui/material";
import * as React from "react";

export default function ButtonsComponent() {
  return (
    <div>
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        margin={5}
        paddingTop={60}
      >
        <Button
          variant="contained"
          sx={{ width: 150 }}
        >
          View
        </Button>
        <Button
          sx={{ width: 150 }}
          variant="contained"
        >
          Add
        </Button>
        <Button
          sx={{ width: 150 }}
          variant="contained"
          disabled
        >
          Edit
        </Button>
        <Button
          sx={{ width: 150 }}
          variant="contained"
          disabled
        >
          Close
        </Button>
        <Button
          sx={{ width: 150 }}
          variant="contained"
          disabled
        >
          Save
        </Button>
        <Button
          sx={{ width: 150 }}
          variant="contained"
          href="#contained-buttons"
        >
          Cancel
        </Button>
      </Stack>
    </div>
  );
}
