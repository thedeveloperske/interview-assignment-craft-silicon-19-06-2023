import {} from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import * as React from "react";

export default function FooterComponent() {
  return (
    <div>
      <div>
        <fieldset
          style={{
            height: "100%",
            width: "100%",
            background: "#ffffff",
            alignItems: "center",
          }}
        >
          <legend>Behind The Scenes</legend>
          <div>
            <TextField
              label="Status"
              id="filled-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="filled"
            />
            <TextField
              label="Open Date"
              id="filled-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="filled"
            />
            <TextField
              label="Closed Date"
              id="filled-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="filled"
            />
            <TextField
              label="Created By"
              id="filled-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="filled"
            />
            <TextField
              label="Modified By"
              id="filled-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="filled"
            />
            <TextField
              label="Supervised On"
              id="filled-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="filled"
            />
            <TextField
              label="Modified On"
              id="filled-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="filled"
            />
            <TextField
              label="Created On"
              id="filled-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="filled"
            />
          </div>
        </fieldset>
      </div>
    </div>
  );
}
