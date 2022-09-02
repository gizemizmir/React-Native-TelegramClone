import {createContext} from 'react';

export const UserContext = createContext({
  user: {
    firstname: '',
    lastname: '',
    username: '',
    isLogin: false,
  },
  setUser: () => {},
});
