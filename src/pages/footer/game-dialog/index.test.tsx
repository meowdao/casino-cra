import React from "react";
import {cleanup, render} from "@testing-library/react";

import {BalanceProvider} from "../../../components/balance-provider";
import {GameDialog} from "./";

afterEach(cleanup);

describe("<GameDialog />", () => {
  it("renders dialog", () => {
    const container = document.createElement("div");
    document.body.append(container);

    const props = {
      container,
      open: true,
      onClose: jest.fn(),
      onResults: jest.fn(),
    };

    const {asFragment} = render(
      <BalanceProvider balance={100}>
        <GameDialog {...props} />
      </BalanceProvider>,
      {container},
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
