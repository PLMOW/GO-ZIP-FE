import styled from 'styled-components';
import * as SockJS from 'sockjs-client';

const Chatting = () => {
  const clickHandler = () => {
    console.log('click');
    //@ts-ignore
    let chatSock = new SockJS(
      `${process.env.REACT_APP_API_BASE_ROUTE}/ws/chat`
    );

    console.log(chatSock);
  };

  return (
    <Wrapper id="chat">
      <button onClick={clickHandler}>123</button>
    </Wrapper>
  );
};

export default Chatting;

const Wrapper = styled.div`
  background: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
