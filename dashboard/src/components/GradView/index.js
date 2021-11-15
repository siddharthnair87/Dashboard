import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { Grid, Paper, TableBody, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";
import SalaryOverTime from "../SalaryOverTime";
import SalaryCompare from "../SalaryCompare";
import GradJobSatisfaction from "../GradJobSatisfaction";
import ResponseRow from "../ResponseTableRow";
import GradSuccessTime from "../GradSuccessTime";
import TechStack from "../TechStack";

export default function GradView({ gradData, openResponse, setOpenResponse }) {
  const latestResponse = getMostRecentResponse(gradData.responses);

  let techArray = [];
  gradData.responses.forEach((response) => {
    if (response.current_tech_stack) {
      response.current_tech_stack.forEach((tech) => {
        if (tech.name) {
          techArray.push(tech.name);
        }
      });
    }
  });

  let lastSurvey = new Date(latestResponse.timestamp);
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <Box sx={{ margin: 1, height: "95vh" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              mt: 2,
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "linear-gradient(to right, #003f5c, #58508d);",
            }}
          >
            <Typography
              gutterBottom
              component="div"
              sx={{ fontSize: 20, color: "white", fontWeight: "medium" }}
            >
              {latestResponse.timestamp
                ? `${gradData.graduate_name.split(" ")[0]} - ${
                    latestResponse.current_position
                  } at ${latestResponse.current_employer}`
                : `${
                    gradData.graduate_name.split(" ")[0]
                  } is currently not working in the technology sector`}
            </Typography>
            <Typography
              gutterBottom
              component="div"
              sx={{ fontSize: 15, color: "white", align: "right" }}
            >
              {latestResponse.timestamp
                ? `Last survey completed: ${lastSurvey.toLocaleDateString(
                    "en-GB",
                    options
                  )}`
                : `No responses`}
            </Typography>
          </Paper>
        </Grid>
        <Grid xs={12} md={7} sx={{ p: 3 }}>
          <Grid xs={12} sx={{ display: "flex" }}>
            <Grid xs={12} md={4}>
              <SalaryCompare gradData={gradData} />
            </Grid>
            <Grid xs={12} md={4} sx={{ pl: 2 }}>
              <GradJobSatisfaction gradData={gradData} />
            </Grid>
            <Grid xs={12} md={4} sx={{ pl: 2 }}>
              <GradSuccessTime gradData={gradData} />
            </Grid>
          </Grid>
          <Grid xs={12}>
            <Paper
              sx={{
                p: 2,
                mt: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <SalaryOverTime gradData={gradData} />
            </Paper>
          </Grid>
        </Grid>
        <Grid xs={12} md={5} sx={{ pt: 3 }}>
          <Grid xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: "content",
                mb: 2,
              }}
            >
              <TechStack data={techArray} rows={3} />
            </Paper>
          </Grid>
          <Grid xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: "content",
              }}
            >
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableCell align="center"></TableCell>
                  <TableCell align="right">
                    <Typography gutterBottom component="div">
                      Survey responses
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                  </TableCell>
                </TableHead>
                <TableBody>
                  {gradData.responses.map((response) => (
                    <ResponseRow
                      id={response.id}
                      responseData={response}
                      openResponse={openResponse}
                      setOpenResponse={setOpenResponse}
                    />
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
