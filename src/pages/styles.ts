import {makeStyles} from "@material-ui/core";

export default makeStyles(
  theme => ({
    root: {
      overflowY: "auto",
      overflowX: "hidden",
      display: "flex",
      minHeight: "100vh",
      position: "relative",
      flexDirection: "column",
    },
    container: theme.mixins.gutters({
      paddingTop: theme.spacing(11),
      paddingBottom: theme.spacing(11),
    }),
  }),
  {name: "Layout"},
);
