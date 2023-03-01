import styled from 'styled-components';
import * as SockJS from 'sockjs-client';

const Chatting = () => {
  const clickHandler = () => {
    console.log('====================');
    //@ts-ignore
    let sock = new SockJS(`${process.env.REACT_APP_API_BASE_ROUTE}/ws-stomp`);

    sock.onopen = function () {
      console.log('onopen');

      sock.send('Hello, world!');
    };

    sock.onclose = function () {
      console.log('onclose');
    };

    sock.onmessage = function (message: any) {
      console.log(message.data);
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
