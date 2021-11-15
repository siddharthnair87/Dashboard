import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function ResponseView({ responseData }) {
  return (
    <Box sx={{ margin: 1 }}>
      {responseData.tech_role && (
        <>
          <Typography sx={{ fontSize: 12 }}>
            Employer: {responseData.current_employer}
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Salary: {responseData.current_salary}
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Position: {responseData.current_position}
          </Typography>
          <Typography sx={{ fontSize: 12 }}>
            Time working: {responseData.length_of_service}
          </Typography>
        </>
      )}
      {!responseData.tech_role && (
        <Typography sx={{ fontSize: 12 }}>No tech role</Typography>
      )}
    </Box>
  );
}
