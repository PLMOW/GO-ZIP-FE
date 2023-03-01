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
    <>
      <div>UserName</div>
      <input type="text" onChange={usernameHandler} />
      <div>text</div>
      <input value={text} type="text" onChange={textChangeHandler} />
      <Button onClick={onClickHandler}>send</Button>
    </>
  );
};

export default Chat;

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
