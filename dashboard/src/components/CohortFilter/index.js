import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import React from "react";
import { useDataContext } from "../../hooks/useDataContext";

const CohortFilter = ({ cohortNum }) => {
  const { filterDataByCohort } = useDataContext();

  return (
    <List component="div" disablePadding>
      <ListItemButton
        onClick={() => filterDataByCohort(cohortNum)}
        sx={{ pl: 4 }}
      >
        <ListItemIcon>
          <GroupsIcon />
        </ListItemIcon>
        <ListItemText primary={`Cohort ${cohortNum}`} />
      </ListItemButton>
    </List>
  );
};

export default CohortFilter;
