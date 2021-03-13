import {createContext} from "react";

export interface IUser {
  name: string;
}

export interface IUserContext<T extends any> {
  profile: T;
  logIn: (profile: T) => void;
  logOut: () => void;
  isAuthenticated: () => boolean;
}

// eslint-disable-next-line
export const UserContext = createContext<IUserContext<any>>(undefined!);
