import React, {FC} from "react";
import {AppBar, Hidden, Link, Toolbar} from "@material-ui/core";

import {Login} from "./login";
import {Balance} from "./balance";
import useStyles from "./styles";

export const Header: FC = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Link className={classes.title} href="/">
          <Hidden smDown>Casino Royal</Hidden>
        </Link>
        <div className={classes.grow} />
        <Balance />
        <Login />
      </Toolbar>
    </AppBar>
  );
};
