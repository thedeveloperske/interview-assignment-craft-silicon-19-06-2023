import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import * as React from "react";

export default function SpecialOffers() {
  return (
    <div>
      <fieldset
        style={{
          height: "100%",
          width: "100%",
          background: "#ffffff",
          alignItems: "center",
        }}
      >
        <legend>Special Offers</legend>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Can Send Greetings?"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Can Send Associate Special Offer?"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Can Send Our Special Offers?"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Statement Online?"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Mobile Alert?"
          />
        </FormGroup>
      </fieldset>
    </div>
  );
}
