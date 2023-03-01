import * as React from 'react';
import { ChatPresenter } from '../Presenter/ChatPresenter';
import { message } from 'antd';
import { useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

export type message = {
  username: string;
  content: string;
};

let sockJS = new SockJS(`${process.env.REACT_APP_API_BASE_ROUTE}/stomp`);
let stompClient: Stomp.Client = Stomp.over(sockJS);
stompClient.debug = () => {};

export const ChatContainer = ({}) => {
  const [contents, setContents] = React.useState<message[]>([]);
  const [username, setUsername] = React.useState('');
  const [message, setMessage] = React.useState('');

  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe('/chat/room/enter/123', (data) => {
        const newMessage: message = JSON.parse(data.body) as message;
        addMessage(newMessage);
      });
    });
  }, [contents]);

  const handleEnter = (username: string, content: string) => {
    const newMessage: message = { username, content };
    stompClient.send('/chat/room/123', {}, JSON.stringify(newMessage));
    setMessage('');
  };

  const addMessage = (message: message) => {
    setContents((prev) => [...prev, message]);
  };

  return (
    <div id="chat" className={'container'}>
      <ChatPresenter
        contents={contents}
        handleEnter={handleEnter}
        message={message}
        setMessage={setMessage}
        username={username}
        setUsername={setUsername}
      />
    </div>
  );
};
