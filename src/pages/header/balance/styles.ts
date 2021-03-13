import {makeStyles} from "@material-ui/core";

export default makeStyles(
  theme => ({
    title: {
      fontSize: 24,
      fontWeight: 500,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }),
  {name: "Balance"},
);
