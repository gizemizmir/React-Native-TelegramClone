import React, {useState} from 'react';
import {UserContext} from '../context/user';

const UserProvider = ({children}) => {
  const [userState, setUserState] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user: userState,
        setUser: setUserState,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
