import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function LengthOfWork({ filterByDuration }) {
  return (
    <FormControl component="fieldset">
      <RadioGroup>
        <FormControlLabel
          value="0-3 months"
          control={<Radio />}
          label="0 - 3 months"
          onChange={(e) => {
            filterByDuration(e.target.value);
          }}
        />
        <FormControlLabel
          value="3-6 months"
          control={<Radio />}
          label="3 - 6 months"
          onChange={(e) => {
            filterByDuration(e.target.value);
          }}
        />
        <FormControlLabel
          value="6-12 months"
          control={<Radio />}
          label="6 - 12 months"
          onChange={(e) => {
            filterByDuration(e.target.value);
          }}
        />
        <FormControlLabel
          value="12-18 months"
          control={<Radio />}
          label="12 - 18 months"
          onChange={(e) => {
            filterByDuration(e.target.value);
          }}
        />
        <FormControlLabel
          value="18-24 months"
          control={<Radio />}
          label="over 18 months"
          onChange={(e) => {
            filterByDuration(e.target.value);
          }}
        />
      </RadioGroup>
    </FormControl>
  );
}
