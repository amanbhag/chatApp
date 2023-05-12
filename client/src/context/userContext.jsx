import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [userNames, setUserNames] = useState(null);
  const [id, setId] = useState(null);
  return (
    <UserContext.Provider value={{ userNames, id }}>
      {props.children}
    </UserContext.Provider>
  );
}
