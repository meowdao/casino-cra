import {createContext} from "react";

export interface IBalanceContext {
  balance: number;
  update: (amount: number) => void;
}

// eslint-disable-next-line
export const BalanceContext = createContext<IBalanceContext>(undefined!);
