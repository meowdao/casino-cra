import React, {ComponentClass, FunctionComponent} from "react";
import {render as renderToDom} from "react-dom";
import {createMuiTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme();

export const render = (App: ComponentClass<any> | FunctionComponent<any>): void => {
  renderToDom(
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>,
    document.getElementById("root"),
  );
};
