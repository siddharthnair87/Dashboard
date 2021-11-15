import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

export default function SalaryCompare({ gradData }) {
  const currentSalary = getMostRecentResponse(
    gradData.responses
  ).current_salary;

  const formattedSalary = currentSalary
    ? `£${String(currentSalary).slice(0, 2)},${String(currentSalary).slice(2)}`
    : "Unemployed";

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
          minHeight: "100%",
        }}
      >
        <Box sx={{ color: "text.secondary" }}>Current salary</Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
          {formattedSalary}
        </Box>
        <Box
          sx={{
            color:
              currentSalary > gradData.responses[0].current_salary
                ? "success.dark"
                : "#800500",
            display: "inline",
            fontWeight: "medium",
            mx: 0.5,
          }}
        >
          {currentSalary >= gradData.responses[0].current_salary ? "+" : "-"}
          {(
            (currentSalary / gradData.responses[0].current_salary) * 100 -
            100
          ).toFixed(2)}
          %
        </Box>
        <Box sx={{ color: "text.secondary", display: "inline", fontSize: 12 }}>
          vs. first salary
        </Box>
      </Box>
    </ThemeProvider>
  );
}
