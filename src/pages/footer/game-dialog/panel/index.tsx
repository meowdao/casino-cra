import React, {memo} from "react";
import {Card, CardContent, Typography} from "@material-ui/core";

import useStyles from "./styles";

export const Panel = memo(props => {
  const {children} = props;

  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography className={classes.text}>{children}</Typography>
      </CardContent>
    </Card>
  );
});
