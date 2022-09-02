import React, {useState} from 'react';
import {ChatContext} from '../context/chat';

const ChatProvider = ({children}) => {
  const [messageState, setMessageState] = useState(null);

  return (
    <ChatContext.Provider
      value={{
        message: messageState,
        setMessage: setMessageState,
      }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
