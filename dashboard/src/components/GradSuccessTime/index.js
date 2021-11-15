import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";

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

export default function GradSuccessTime({ gradData }) {
  function timeDiff(grad) {
    const timeDiff = Math.abs(
      new Date(grad.graduation_date.slice(0, 10)) -
        new Date(grad.first_job_date.slice(0, 10))
    );
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
          minHeight: "100%",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Box sx={{ color: "text.secondary", maxWidth: 135 }}>
          Days to find first job in tech
        </Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
          {timeDiff(gradData)}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
