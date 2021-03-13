import {makeStyles} from "@material-ui/core";

export default makeStyles(
  theme => ({
    appbar: {},
    toolbar: {
      minHeight: theme.spacing(8),
    },
    grow: {
      flexGrow: 1,
    },
    title: {
      color: theme.palette.common.white,
      textDecoration: "none",
      fontWeight: 500,
      fontSize: 36,
      "&:hover": {
        textDecoration: "none",
      },
    },
  }),
  {name: "Header"},
);
