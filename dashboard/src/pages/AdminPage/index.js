import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../../components/Title";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { Grid } from "@mui/material";
import { usePartnersData } from "../../hooks/useSWR";


export default function AdminPage() {
  const { response, isLoading } = usePartnersData();
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {!isLoading && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <React.Fragment>
                <Title>Partners</Title>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Organisation Name</TableCell>
                      <TableCell>Partner Organisation</TableCell>
                      <TableCell>Sponsor</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {response.payload.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell>{row.org_name}</TableCell>
                        <TableCell>
                          {row.is_partner && <Checkbox defaultChecked />}
                        </TableCell>
                        <TableCell>
                          {row.is_sponsor && <Checkbox defaultChecked />}
                          {!row.is_sponsor && <Checkbox />}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </React.Fragment>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
