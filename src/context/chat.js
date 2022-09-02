import {createContext} from 'react';

export const ChatContext = createContext({
  message: {
    userId: '',
    userMessages: [],
  },
  setMessage: () => {},
});
