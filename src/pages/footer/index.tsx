import React, {FC, Fragment, useState} from "react";
import {AppBar, Fab, Link, Toolbar} from "@material-ui/core";
import {Casino} from "@material-ui/icons";

import {GameDialog} from "./game-dialog";
import useStyles from "./styles";

export interface IFooterProps {
  onResults: (results: Array<string>) => void;
}

export const Footer: FC<IFooterProps> = props => {
  const {onResults: handleResults} = props;

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Fab color="secondary" className={classes.fab} onClick={handleOpen}>
            <Casino />
          </Fab>
          <div className={classes.grow} />
          <Link className={classes.title} href="https://github.com/TrejGun">
            &copy; TrejGun
          </Link>
        </Toolbar>
      </AppBar>
      <GameDialog open={open} onClose={handleClose} onResults={handleResults} />
    </Fragment>
  );
};
