import React, {FC, useCallback, useRef} from "react";
import {Container} from "@material-ui/core";

import {UserProvider} from "../components/user-provider";
import {BalanceProvider} from "../components/balance-provider";
import {Header} from "./header";
import {Footer} from "./footer";
import {IResultsSelectorRef, Results} from "./content";
import useStyles from "./styles";

const App: FC = () => {
  const classes = useStyles();
  const ref = useRef<IResultsSelectorRef>(null);

  const handleResults = useCallback((results: Array<string>) => ref.current?.addRow(results), [ref]);

  return (
    <UserProvider>
      <BalanceProvider balance={100}>
        <div className={classes.root}>
          <Header />
          <Container className={classes.container} maxWidth="md">
            <Results ref={ref} />
          </Container>
          <Footer onResults={handleResults} />
        </div>
      </BalanceProvider>
    </UserProvider>
  );
};

export default App;
