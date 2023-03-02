import styled from 'styled-components';

const Chat = (props: any) => {
  const {
    sendMessage,
    onClickHandler,
    textChangeHandler,
    usernameHandler,
    text,
  } = props;

  return (
    <Wrapper>
      <div>UserName</div>
      <input type="text" onChange={usernameHandler} />
      <div>text</div>
      <input value={text} type="text" onChange={textChangeHandler} />
      <Button onClick={onClickHandler}>send</Button>
    </Wrapper>
  );
};

export default Chat;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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
