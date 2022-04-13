import React, { useState } from "react";
import clsx from "clsx";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#fff",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    minHeight: "100vh",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    minWidth: 800,
  },
}));

function Page({ children, isLoading = false, title }) {
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  if (isLoading) {
    return <div> Loading... </div>;
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, openMenu && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleMenu}
            className={clsx(
              classes.menuButton,
              openMenu && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {title}
          </Typography>
          <IconButton>
            <Avatar
              style={{
                width: "40px",
                height: "40px",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        classes={{
          paper: clsx(
            classes.drawerPaper,
            !openMenu && classes.drawerPaperClose
          ),
        }}
        open={openMenu}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleMenu}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "aliceblue",
            textAlign: "center",
          }}
        ></div>
        <Divider />
        <List>{/* <SidebarItems /> */}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>{children}</Container>
      </main>
    </div>
  );
}

export default Page;
