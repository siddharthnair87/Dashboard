import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { Collapse } from "@mui/material";
import ResponseView from "../ResponseView";
import ErrorIcon from "@mui/icons-material/Error";

export default function ResponseRow({
  responseData,
  openResponse,
  setOpenResponse,
  id,
}) {
  let formattedDate = new Date(responseData.timestamp);
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell style={{ pr: 0 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              openResponse === id ? setOpenResponse(null) : setOpenResponse(id);
            }}
          >
            {openResponse === id ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell align="right">
          {formattedDate.toLocaleDateString("en-GB", options)}
        </TableCell>
        <TableCell align="center" sx={{ width: 300 }}>
          {responseData.tech_role ? "" : <ErrorIcon />}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openResponse === id} timeout="auto" unmountOnExit>
            <ResponseView responseData={responseData} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
