import {makeStyles} from "@material-ui/core";

export default makeStyles(
  theme => ({
    login: {
      color: theme.palette.common.white,
      borderColor: theme.palette.common.white,
    },
    active: {
      backgroundColor: "#f0f0f0",
    },
  }),
  {name: "Login"},
);
