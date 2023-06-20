import { Work } from "@mui/icons-material";
import {
  Autocomplete,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import * as React from "react";

export default function HeaderComponent() {
  const defaultProps = {
    options: top100Clients,
    getOptionLabel: (option) => option.title,
  };

  return (
    <div>
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Client"
            variant="standard"
          />
        )}
      />
      <FormControl
        fullWidth
        sx={{ m: 1 }}
      >
        <InputLabel
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          Segment
        </InputLabel>
        <NativeSelect
          inputProps={{
            name: "segment",
            id: "uncontrolled-native",
          }}
        >
          {segments.map((segment) => (
            <option value={segment}> {segment}</option>
          ))}
        </NativeSelect>
      </FormControl>
      <TextField
        label="Segment Type"
        id="filled-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        variant="filled"
      />
      <TextField
        label="Subsegment Type"
        id="filled-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        variant="filled"
      />
      <TextField
        label="Application ID"
        id="filled-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        variant="filled"
      />
      <FormControl
        fullWidth
        sx={{ m: 1 }}
        variant="standard"
      >
        <InputLabel
          htmlFor="standard-adornment-amount"
          required
        >
          Client Name
        </InputLabel>
        <Input
          id="standard-adornment-company"
          startAdornment={
            <InputAdornment position="start">
              <Work />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        label="Base ID"
        id="filled-start-adornment"
        sx={{ m: 1, width: "25ch" }}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
        variant="filled"
      />
    </div>
  );
}

const top100Clients = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

//relationship managers
const segments = ["--Select Segment--", "Corporate", "Individual", "SME"];
