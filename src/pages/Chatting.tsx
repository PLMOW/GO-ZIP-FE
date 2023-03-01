import styled from 'styled-components';
import * as SockJS from 'sockjs-client';

const Chatting = () => {
  const clickHandler = () => {
    console.log('click');
    //@ts-ignore
    let sock = new SockJS(`${process.env.REACT_APP_API_BASE_ROUTE}/ws-stomp`);
    console.log(sock);

    sock.onmessage = function (e: any) {
      console.log(e.data);
    };
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
