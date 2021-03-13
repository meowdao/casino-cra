import React, {PropsWithChildren, ReactElement, useEffect, useState} from "react";

import {IUser, UserContext} from "./context";

const STORAGE_NAME = "casino_user";

interface IUserProviderProps<T> {
  profile?: T | null;
}

export const UserProvider = <T extends IUser>(props: PropsWithChildren<IUserProviderProps<T>>): ReactElement | null => {
  const {profile: defaultProfile = null, children} = props;
  const [profile, setProfile] = useState<T | null>(defaultProfile);

  useEffect(() => {
    const auth = window.localStorage.getItem(STORAGE_NAME);
    setProfile(auth ? JSON.parse(auth) : defaultProfile);
  }, [defaultProfile]);

  const save = (key: string, profile: T | null): void => {
    const json = JSON.stringify(profile);
    window.localStorage.setItem(key, json);
  };

  const logIn = (profile: T): void => {
    setProfile(profile);
    save(STORAGE_NAME, profile);
  };

  const logOut = (): void => {
    setProfile(null);
    save(STORAGE_NAME, null);
  };

  const isAuthenticated = (): boolean => {
    return profile !== null;
  };

  return (
    <UserContext.Provider
      value={{
        profile,
        logIn,
        logOut,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
