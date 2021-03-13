import React, {useEffect, useState, PropsWithChildren, ReactElement} from "react";

import {BalanceContext} from "./context";

const STORAGE_NAME = "casino_balance";

interface IBalanceProviderProps {
  balance?: number;
}

export const BalanceProvider = (props: PropsWithChildren<IBalanceProviderProps>): ReactElement | null => {
  const {balance: defaultBalance = 0, children} = props;
  const [balance, setBalance] = useState<number>(defaultBalance);

  useEffect(() => {
    const auth = window.localStorage.getItem(STORAGE_NAME);
    setBalance(auth ? JSON.parse(auth) : defaultBalance);
  }, [defaultBalance]);

  const save = (key: string, balance: number): void => {
    const json = JSON.stringify(balance);
    window.localStorage.setItem(key, json);
  };

  const update = (amount: number): void => {
    setBalance(balance + amount);
    save(STORAGE_NAME, balance);
  };

  return (
    <BalanceContext.Provider
      value={{
        balance,
        update,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};
