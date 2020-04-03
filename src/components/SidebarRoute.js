import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import MonochromePhotosIcon from "@material-ui/icons/MonochromePhotos";
import PetsIcon from "@material-ui/icons/Pets";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Tooltip from "@material-ui/core/Tooltip";
import { history } from "../App";
import SidebarOne from "./SidebarOne";
import SidebarTwo from "./SidebarTwo";
import SidebarThree from "./SidebarThree";
import SidebarFour from "./SidebarFour";
import HomePage from "./HomePage";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [menu, setMenu] = React.useState("");

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  let sideBarData = [
    {
      name: "Sidebar 1",
      icon: <InsertEmoticonIcon />,
      component: <SidebarOne />
    },
    {
      name: "Sidebar 2",
      icon: <FilterVintageIcon />,
      component: <SidebarTwo />
    },
    {
      name: "Sidebar 3",
      icon: <MonochromePhotosIcon />,
      component: <SidebarThree />
    },
    { name: "Sidebar 4", icon: <PetsIcon />, component: <SidebarFour /> }
  ];
  const myClick = val => {
    setMenu(val);
  };
  const onsignOut = () => {
    localStorage.removeItem("facebookData");
    localStorage.removeItem("googleData");
    localStorage.removeItem("LinkedInData");
    history.push("/");
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Header
          </Typography>
          <div className="sidbarOut">
            <Tooltip title="Sign out">
              <ExitToAppIcon onClick={onsignOut} />
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        style={{ marginTop: "100px" }}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List>
          {sideBarData.map((text, key) => (
            <ListItem button key={key} onClick={() => myClick(text.name)}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {menu !== "" ? (
          sideBarData.map((text, index) => {
            return (
              <div key={index}>{text.name === menu ? text.component : ""}</div>
            );
          })
        ) : (
          <div className="text-center">
            <HomePage
              googleData={
                props.location.state && props.location.state.googleData
              }
              facebookData={
                props.location.state && props.location.state.facebookData
              }
              emailLogin={
                props.location.state && props.location.state.emailLogin
              }
              linkedInData={
                props.location.state && props.location.state.linkedInData
              }
            />
          </div>
        )}
      </main>
    </div>
  );
}
