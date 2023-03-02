import { message } from 'antd';
import { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import styled from 'styled-components';
import Chat from './Chat';

export interface message {
  type: string;
  roomId: string;
  sender: string;
  message: string;
}

/**
 * @param param0 매물의 PostID가 RoomID로 될 것
 * @returns
 */
export const ChatHandler = ({ roomId }: { roomId: number }) => {
  const [connect, setConnect] = useState<boolean>(false);
  const [messages, setMessages] = useState<message[]>([]);
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');

  /* CreateConnection OnMount */
  //re-render마다 접속 끊기지 않게 useEffect 적용
  //Socket 연결 안됨. 해결책 찾아보기.
  let sockJS = new SockJS(`${process.env.REACT_APP_API_BASE_ROUTE}/stomp`);
  let stompClient: Stomp.Client = Stomp.over(sockJS);

  // 연결과 동시에 매물 ID Subscribe
  stompClient.connect({}, function () {
    setConnect(true);
    stompClient.subscribe(`/subscribe/rooms/${roomId}`, function (res) {
      console.log(res.body);
    });
  });

  /* Subscribe하고있는 모든 User에게 Send */
  const sendMessage = (message: string) => {
    stompClient.send(
      `/chat/room/${roomId}`,
      {},
      JSON.stringify({
        type: 'TALK',
        roomId: roomId,
        sender: username,
        message: message,
      })
    );
  };

  const onClickHandler = () => {
    sendMessage(text);
    setText('');
  };

  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText((prev) => e.currentTarget.value);
  };

  const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  return (
    <Wrapper id="chat">
      <div>UserName</div>
      <input type="text" onChange={usernameHandler} />
      <div>text</div>
      <input value={text} type="text" onChange={textChangeHandler} />
      <Button onClick={onClickHandler}>send</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const Button = styled.div`
  background: black;
  color: white;
  padding: 10px;
  border-radius: 3px;
  font-weight: 600;
  transition: ${({ theme }) => theme.transitionOption};

  :hover {
    cursor: pointer;
    background: white;
    color: black;
  }
`;

/*
<Chat
handler={{
  sendMessage,
  onClickHandler,
  textChangeHandler,
  usernameHandler,
  text,
}}
/>
*/
