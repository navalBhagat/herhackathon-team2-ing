import React, { createContext, useState } from "react";
interface Props { 
    children?: React.ReactNode;
}
export const UserContext = createContext({loggedIn: false, setLoggedIn: (value: boolean) => {}});

export const LoggedInProvider: React.FC<Props> = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
}