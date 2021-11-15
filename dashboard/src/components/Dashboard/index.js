import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useLoginContext } from "../../hooks/useLogin";
import Homepage from "../../pages/Homepage";
import AdminPage from "../../pages/AdminPage";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDataContext } from "../../hooks/useDataContext";
import FilterListIcon from "@mui/icons-material/FilterList";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import GroupsIcon from "@mui/icons-material/Groups";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { CSVLink } from "react-csv";
import DownloadIcon from "@mui/icons-material/Download";
import convertJsonToCsv from "../../helperFunctions/jsontocsv";
import CohortFilter from "../CohortFilter";
import NameSearch from "../NameSearch";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LengthOfWork from "../LengthOfWork";

const drawerWidth = 320;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(5),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme({
  typography: {
    fontFamily: `"Raleway", "Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const appbarcolor = "#212830";
const sidebarTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#F58A07" },
    success: {
      main: "#F58A07",
    },
    text: {
      primary: "#FFFFFF",
    },
    background: {
      paper: appbarcolor,
      // default: appbarcolor,
    },
  },
});

export default function Dashboard() {
  const { handleLogout } = useLoginContext();
  const {
    data,
    resetFilter,
    filterDataByName,
    filterDataByEmployer,
    filterDataByLengthOfService,
  } = useDataContext();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
    setOpenList(false);
    setOpenGradSearch(false);
    setOpenEmployerSearch(false);
    setLengthOfWork(false);
  };

  const [openList, setOpenList] = useState(false);
  const [openGradSearch, setOpenGradSearch] = useState(false);
  const [openEmployerSearch, setOpenEmployerSearch] = useState(false);
  const [lengthOfWork, setLengthOfWork] = useState(false);

  const handleClick = () => {
    if (open) {
      setOpenList(!openList);
      setOpenGradSearch(false);
      setOpenEmployerSearch(false);
      setLengthOfWork(false);
    }
  };
  const handleSearchByGrad = () => {
    if (open) {
      setOpenGradSearch(!openGradSearch);
      setOpenList(false);
      setOpenEmployerSearch(false);
      setLengthOfWork(false);
    }
  };
  const handleSearchByEmployer = () => {
    if (open) {
      setOpenEmployerSearch(!openEmployerSearch);
      setOpenList(false);
      setOpenGradSearch(false);
      setLengthOfWork(false);
    }
  };
  const handleSearchByLengthOfWork = () => {
    if (open) {
      setLengthOfWork(!lengthOfWork);
      setOpenList(false);
      setOpenGradSearch(false);
      setOpenEmployerSearch(false);
    }
  };

  return (
    <Router>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar sx={{ backgroundColor: appbarcolor }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  color: "white",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="white"
                sx={{
                  flexGrow: 1,
                  fontWeight: "medium",
                }}
              >
                School of Code Alumni Reporting Dashboard
              </Typography>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <ListItem button edge="end">
                    <ListItemIcon>
                      <PeopleAltIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary="Graduates" />
                  </ListItem>
                </Link>

                <Link
                  to="/administration"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <BusinessIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary="Partners" />
                  </ListItem>
                </Link>
                <div
                  style={{
                    backgroundColor: "white",
                    height: "45px",
                    width: "5px",
                    marginRight: "3px",
                    marginLeft: "30px",
                  }}
                ></div>
                <ListItem button onClick={() => handleLogout()}>
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ color: "white" }} />
                </ListItem>
              </div>
            </Toolbar>
          </AppBar>
          <ThemeProvider theme={sidebarTheme}>
            <Drawer variant="permanent" open={open}>
              <Toolbar
                sx={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "flex-end",
                  px: [1],
                }}
              >
                <IconButton onClick={toggleDrawer}>
                  <ChevronLeftIcon />
                </IconButton>
              </Toolbar>

              <List
                sx={{
                  paddingLeft: "3px",
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton
                  onClick={handleClick}
                  sx={{
                    mb: "10px",
                  }}
                >
                  <ListItemIcon>
                    <FilterListIcon />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                    }}
                    primary="Cohorts"
                  />
                  {openList ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openList} timeout="auto" unmountOnExit>
                  <CohortFilter cohortNum={1} key={1} />
                  <CohortFilter cohortNum={2} key={2} />
                  <CohortFilter cohortNum={3} key={3} />
                  <CohortFilter cohortNum={4} key={4} />
                  <CohortFilter cohortNum={5} key={5} />
                  <CohortFilter cohortNum={6} key={6} />
                  <CohortFilter cohortNum={7} key={7} />

                  <List component="div">
                    <ListItemButton
                      onClick={() => resetFilter()}
                      sx={{ pl: 4 }}
                    >
                      <ListItemIcon>
                        <GroupsIcon />
                      </ListItemIcon>
                      <ListItemText primary="All Cohorts" />
                    </ListItemButton>
                  </List>
                </Collapse>
                <ListItemButton
                  onClick={handleSearchByGrad}
                  sx={{
                    mb: "10px",
                  }}
                >
                  <ListItemIcon>
                    <PersonSearchIcon />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                    }}
                    primary="Graduate Search"
                  />

                  {openGradSearch ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openGradSearch} timeout="auto" unmountOnExit>
                  <NameSearch
                    graduateSearch={filterDataByName}
                    text=" Search by name"
                  />
                </Collapse>
                <ListItemButton
                  onClick={handleSearchByEmployer}
                  sx={{
                    mb: "10px",
                  }}
                >
                  <ListItemIcon>
                    <WorkIcon />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                    }}
                    primary="Employer Search"
                  />
                  {openEmployerSearch ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openEmployerSearch} timeout="auto" unmountOnExit>
                  <NameSearch
                    graduateSearch={filterDataByEmployer}
                    text=" Search by employer"
                  />
                </Collapse>
                <ListItemButton
                  onClick={handleSearchByLengthOfWork}
                  sx={{
                    mb: "10px",
                  }}
                >
                  <ListItemIcon>
                    <AccessTimeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: "bold",
                    }}
                    primary="Length Of Service
                "
                  />
                  {lengthOfWork ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={lengthOfWork} timeout="auto" unmountOnExit>
                  <LengthOfWork
                    filterByDuration={filterDataByLengthOfService}
                  />
                </Collapse>

                <ListItemButton sx={{ pt: "20px", mt: 3 }}>
                  <ListItemIcon>
                    <DownloadIcon />
                  </ListItemIcon>
                  <CSVLink
                    data={convertJsonToCsv(data)}
                    filename={"graduate_responses.csv"}
                    style={{ textDecorationLine: "none" }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ textDecorationLine: "none" }}
                    >
                      Export CSV{" "}
                    </Button>
                  </CSVLink>
                </ListItemButton>
              </List>
            </Drawer>
          </ThemeProvider>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[300]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/administration">
                <AdminPage />
              </Route>
            </Switch>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}
