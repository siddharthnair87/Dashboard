import { ListItemButton, ListItemIcon, TextField } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const NameSearch = ({ graduateSearch, text }) => {
  return (
    <div>
      <ListItemButton>
        <ListItemIcon>
          <PersonSearchIcon />
        </ListItemIcon>

        <TextField
          id="outlined-basic"
          label={text}
          variant="outlined"
          onChange={(e) => {
            graduateSearch(e.target.value);
          }}
        />

        <IconButton
          type="submit"
          sx={{ p: "5px 0 0 15px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </ListItemButton>
    </div>
  );
};

export default NameSearch;
